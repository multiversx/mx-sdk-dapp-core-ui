import { newE2EPage } from '@stencil/core/testing';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

describe('transaction-method', () => {
  it('renders with default props', async () => {
    const page = await newE2EPage();
    await page.setContent('<transaction-method></transaction-method>');

    const element = await page.find('transaction-method');
    expect(element).not.toBeNull();
    expect(element.shadowRoot).not.toBeNull();
  });

  it('displays the transaction method', async () => {
    const page = await newE2EPage();
    await page.setContent('<transaction-method></transaction-method>');

    await page.$eval('transaction-method', (elm: any) => {
      elm.method = 'testMethod';
    });
    await page.waitForChanges();

    const methodElement = await page.find('transaction-method >>> .text-truncate');
    expect(methodElement.textContent).toBe('testMethod');
  });

  it('sets the action description as title', async () => {
    const page = await newE2EPage();
    await page.setContent('<transaction-method></transaction-method>');

    await page.$eval('transaction-method', (elm: any) => {
      elm.actionDescription = 'Test Description';
    });
    await page.waitForChanges();

    const spanElement = await page.find(`transaction-method >>> [data-testid="${DataTestIdsEnum.method}"]`);
    expect(await spanElement.getAttribute('title')).toBe('Test Description');
  });

  it('applies correct CSS classes', async () => {
    const page = await newE2EPage();
    await page.setContent('<transaction-method></transaction-method>');

    const outerSpan = await page.find('transaction-method >>> span');
    expect(outerSpan).toHaveClass('badge');
    expect(outerSpan).toHaveClass('badge-secondary');
    expect(outerSpan).toHaveClass('badge-pill');
    expect(outerSpan).toHaveClass('font-weight-light');

    const innerDiv = await page.find('transaction-method >>> div > div');
    expect(innerDiv).toHaveClass('text-truncate');
    expect(innerDiv).toHaveClass('text-capitalize');
    expect(innerDiv).toHaveClass('text-white');
  });

  it('has correct data-testid', async () => {
    const page = await newE2EPage();
    await page.setContent('<transaction-method></transaction-method>');

    const spanElement = await page.find(`transaction-method >>> [data-testid="${DataTestIdsEnum.method}"]`);
    expect(spanElement).not.toBeNull();
  });
});
