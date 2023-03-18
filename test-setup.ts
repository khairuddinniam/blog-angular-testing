import '@testing-library/jest-dom'
import 'zone.js'
import 'zone.js/testing'
import { configure } from '@testing-library/angular'
import { ReactiveFormsModule } from '@angular/forms'

configure({
  defaultImports: [ReactiveFormsModule],
})
