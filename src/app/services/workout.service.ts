import { Injectable } from '@angular/core';

export interface Workout {
  id: number;
  name: string;
  type: string;
  minutes: number;
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  getWorkouts(): Workout[] {
    return this.workouts;
  }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem('workouts');
    if (data) {
      this.workouts = JSON.parse(data);
    }
  }
}
