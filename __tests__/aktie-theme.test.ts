import { AktieTheme } from '../src/aktie-theme';

describe('AktieTheme Tests', () => {
  it('Should have the correct primary color', () => {
    const expected = { main: '#E1008B' };
    expect(AktieTheme.palette?.primary).toStrictEqual(expected);
  });

  it('Should have the correct secondary color', () => {
    const expected = { main: '#8D1097' };
    expect(AktieTheme.palette?.secondary).toStrictEqual(expected);
  });

  it('Should have the correct error color', () => {
    const expected = { main: '#F00000' };
    expect(AktieTheme.palette?.error).toStrictEqual(expected);
  });

  it('Should have the correct warning color', () => {
    const expected = { main: '#ED6C02' };
    expect(AktieTheme.palette?.warning).toStrictEqual(expected);
  });

  it('Should have the correct info color', () => {
    const expected = { main: '#0288D1' };
    expect(AktieTheme.palette?.info).toStrictEqual(expected);
  });

  it('Should have the correct font family', () => {
    const expected = { fontFamily: 'Roboto' };
    expect(AktieTheme.typography).toStrictEqual(expected);
  });

  it('Should have the correct button style overrides', () => {
    const expected = {
      root: {
        borderRadius: 8,
        boxShadow: 'none',
        textTransform: 'capitalize',
        ':focus': {
          outline: '2px solid #0000008F',
          outlineOffset: '3px'
        }
      }
    };
    expect(AktieTheme.components?.MuiButton?.styleOverrides).toStrictEqual(
      expected
    );
  });

  it('Should have the correct select default props', () => {
    const expected = { variant: 'outlined' };
    expect(AktieTheme.components?.MuiSelect?.defaultProps).toStrictEqual(
      expected
    );
  });

  it('Should have the correct dialog style overrides', () => {
    const expected = { borderRadius: 8 };
    expect(
      AktieTheme.components?.MuiDialog?.styleOverrides?.root
    ).toStrictEqual(expected);
  });

  it('Should have the correct text field default props', () => {
    const expected = { variant: 'outlined' };
    expect(AktieTheme.components?.MuiTextField?.defaultProps).toStrictEqual(
      expected
    );
  });
});
