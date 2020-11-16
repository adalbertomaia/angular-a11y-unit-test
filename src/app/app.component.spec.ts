import { ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render, RenderResult } from '@testing-library/angular';
import { checkA11y } from '../../axe-helper';

describe('AppComponent', () => {
  let renderResult: RenderResult<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    renderResult = await render(AppComponent, {
      declarations: [
        AppComponent
      ],
    });
    fixture = renderResult.fixture;
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const { container } = renderResult;
    expect(container).toBeInTheDocument();
  });

  it('should be accessible', async () => {
    const { container } = renderResult;
    await checkA11y(container);
  });

});
