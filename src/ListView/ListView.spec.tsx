/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles';
import { ListView } from './ListView';

describe('ListView 테스트', () => {
  test('secondaryVariant=textButton 일 때 텍스트 버튼과 ">" 아이콘이 렌더링 되어야 한다.', () => {
    const { container, getByText } = render(
      <MuiThemeProvider theme={theme}>
        <ListView primary="List Item" secondary="TEXT" secondaryVariant="textButton" />
      </MuiThemeProvider>,
    );

    expect(container.firstChild!.childNodes[1]!.nodeName).toBe('BUTTON');

    const button = container.firstChild!.childNodes[1]!;
    const secondaryText = getByText('TEXT');
    const rightArrowIcon = container.querySelector('svg');

    expect(button).toContainElement(secondaryText);
    expect(button).toContainElement(rightArrowIcon);

    expect(rightArrowIcon).toHaveStyle({
      marginLeft: '6px',
      fontSize: '18px',
    });
  });

  test('secondaryVariant=text 일 때 텍스트가 렌더링 되어야 한다.', () => {
    const { container, getByText } = render(
      <MuiThemeProvider theme={theme}>
        <ListView primary="List Item" secondary="TEXT" secondaryVariant="text" />
      </MuiThemeProvider>,
    );

    expect(container.firstChild!.childNodes[1]!.nodeName).toBe('P');

    const typography = container.firstChild!.childNodes[1]!;
    const secondaryText = getByText('TEXT');

    expect(typography).toContainElement(secondaryText);
  });

  test('secondaryVariant=error 일 때 "!" 아이콘과 텍스트가 렌더링 되어야 한다.', () => {
    const { container, getByText } = render(
      <MuiThemeProvider theme={theme}>
        <ListView primary="List Item" secondary="TEXT" secondaryVariant="error" />
      </MuiThemeProvider>,
    );

    expect(container.firstChild!.childNodes[1]!.nodeName).toBe('SPAN');

    const typography = container.firstChild!.childNodes[1]!;
    const infoIcon = container.querySelector('svg');
    const secondaryText = getByText('TEXT');

    expect(typography).toContainElement(infoIcon);
    expect(typography).toContainElement(secondaryText);

    expect(infoIcon).toHaveStyle({
      marginRight: '4px',
      fontSize: '14px',
    });
  });
});
