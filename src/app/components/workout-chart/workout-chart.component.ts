import { Component } from '@angular/core';
import { WorkoutService, Workout } from '../../services/workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
})
export class WorkoutFormComponent {
  name: string = '';
  type: string = '';
  minutes: number = 0;

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    const workout: Workout = {
      id: Date.now(),
      name: this.name,
      type: this.type,
      minutes: this.minutes
    };
    this.workoutService.addWorkout(workout);
  }
}
