import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideStore, Store } from '@ngrx/store';
import { reducers, metaReducers } from './data/store/reducers';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { TasksEffects } from './data/store/effects/tasks.effects';
import { initTasksAction } from './data/store/actions/tasks.actions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideEffects([TasksEffects]),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideRouterStore(),
    provideAppInitializer(() => {
      const store = inject(Store);
      store.dispatch(initTasksAction());
    }),
  ],
};
