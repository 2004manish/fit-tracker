import { Component } from '@angular/core';
import { WorkoutService, Workout } from '../../services/workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
})
export class WorkoutListComponent {
  workouts: Workout[];

  constructor(private workoutService: WorkoutService) {
    this.workouts = this.workoutService.getWorkouts();
  }
}
