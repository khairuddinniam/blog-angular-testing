import '@testing-library/jest-dom'
// Use noop zone instead of zone.js because of issue below
// https://github.com/angular/angular/issues/47872
import './noop-zone'
// import 'zone.js'
// import 'zone.js/testing'
import { configure } from '@testing-library/angular'
import { ReactiveFormsModule } from '@angular/forms'
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing'
import { TestBed } from '@angular/core/testing'

// First, initialize the Angular testing environment.
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
)

configure({
  defaultImports: [ReactiveFormsModule],
})
