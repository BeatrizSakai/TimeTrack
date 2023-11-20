import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Registre o idioma português
registerLocaleData(localePt);

registerLocaleData(localePt);

export interface Task {
  name: string;
  completed: boolean;
  color: string;
  subtasks?: Task[];
  title?: string; // Adicione esta propriedade
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class CalendarioComponent implements OnInit {
  dataAtual: Date = new Date();
  diasCalendario: { date: Date; tasks: Task[] }[] = [];
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      // Atualize as tarefas e reconstrua o calendário
      this.tasks = tasks;
      this.construirCalendario();
    });
  }
  

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();
  
    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6; // sábado
  
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }
  
    const dataFinal = new Date(ano, mes + 1, 0);
  
    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      const dia: { date: Date; tasks: Task[] } = {
        date: new Date(data.getTime()),
        tasks: this.getTasksForDate(new Date(data.getTime())),
      };
  
      this.diasCalendario.push(dia);
    }
  }
  

  getTasksForDate(date: Date): Task[] {
    return this.tasks.filter((task) => {
      const taskDate = task.subtasks && task.subtasks.length > 0 ? new Date(task.subtasks[0].name) : null;

      return (
        taskDate &&
        taskDate.getDate() === date.getDate() &&
        taskDate.getMonth() === date.getMonth() &&
        taskDate.getFullYear() === date.getFullYear()
      );
    });
  }

  // Adicione a lógica para criar uma tarefa (utilize isso no seu formulário de criação de tarefas)
  criarTarefa() {
    const novaTarefa: Task = {
      name: 'Nova Tarefa',
      completed: false,
      color: 'cor',
      subtasks: [{ name: this.formatarData(this.dataAtual), completed: false, color: 'cor' }],
    };
  
    this.taskService.addTask(novaTarefa);
    this.construirCalendario(); // Atualizar o calendário após criar uma nova tarefa
  }
  

  formatarData(data: Date): string {
    // Adapte o formato da data conforme necessário
    return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
  }

  alterarMes(offsetMes: number) {
    this.dataAtual.setMonth(this.dataAtual.getMonth() + offsetMes);
    this.dataAtual = new Date(this.dataAtual.getTime());
    this.construirCalendario();
  }
}
