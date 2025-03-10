import { newSpecPage } from '@stencil/core/testing';

import { NotificationsFeed } from '../notifications-feed';
import { NotificationsFeedEventsEnum } from '../notifications-feed.types';

describe('notifications-feed', () => {
  const mockPendingTransactions = [
    {
      toastId: 'tx1',
      title: 'Transaction 1',
      transactionHash: 'hash1',
      status: 'pending',
      link: 'link1',
      actions: [],
      transactions: [{ hash: 'hash1', status: 'pending', link: 'link1' }],
    },
  ];

  const mockTransactionsHistory = [
    {
      hash: 'hash1',
      status: 'success',
      link: 'link1',
      title: 'Transaction 1',
      timestamp: Date.now(),
    },
  ];

  it('renders closed by default', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    expect(page.root).not.toBeNull();
    expect(page.rootInstance.isOpen).toBe(false);
  });

  it('opens when handleViewAll is called', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    page.rootInstance.handleViewAll();
    await page.waitForChanges();

    expect(page.rootInstance.isOpen).toBe(true);
  });

  it('closes when handleClose is called', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    const eventBusMock = {
      publish: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    };
    page.rootInstance.eventBus = eventBusMock;

    page.rootInstance.isOpen = true;
    page.rootInstance.handleClose();
    await page.waitForChanges();

    expect(page.rootInstance.isOpen).toBe(false);
    expect(eventBusMock.publish).toHaveBeenCalledWith(NotificationsFeedEventsEnum.CLOSE_NOTIFICATIONS_FEED);
  });

  it('updates pending transactions', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    page.rootInstance.pendingTransactionsUpdate(mockPendingTransactions);
    await page.waitForChanges();

    expect(page.rootInstance.pendingTransactions).toEqual(mockPendingTransactions);
  });

  it('updates transactions history', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    page.rootInstance.transactionsHistoryUpdate(mockTransactionsHistory);
    await page.waitForChanges();

    expect(page.rootInstance.transactionsHistory).toEqual(mockTransactionsHistory);
  });

  it('handles clear history action', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    const eventBusMock = {
      publish: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    };
    page.rootInstance.eventBus = eventBusMock;

    page.rootInstance.handleClear();
    await page.waitForChanges();

    expect(eventBusMock.publish).toHaveBeenCalledWith(NotificationsFeedEventsEnum.CLEAR_NOTIFICATIONS_FEED_HISTORY);
  });

  it('subscribes to events on componentDidLoad', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    const eventBusMock = {
      publish: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    };
    page.rootInstance.eventBus = eventBusMock;

    page.rootInstance.componentDidLoad();

    expect(eventBusMock.subscribe).toHaveBeenCalledTimes(3);
    expect(eventBusMock.subscribe).toHaveBeenCalledWith(NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE, expect.any(Function));
    expect(eventBusMock.subscribe).toHaveBeenCalledWith(NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE, expect.any(Function));
    expect(eventBusMock.subscribe).toHaveBeenCalledWith(NotificationsFeedEventsEnum.OPEN_NOTIFICATIONS_FEED, expect.any(Function));
  });

  it('unsubscribes from events on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [NotificationsFeed],
      html: '<notifications-feed></notifications-feed>',
    });

    const eventBusMock = {
      publish: jest.fn(),
      subscribe: jest.fn(),
      unsubscribe: jest.fn(),
    };
    page.rootInstance.eventBus = eventBusMock;

    page.rootInstance.disconnectedCallback();

    expect(eventBusMock.unsubscribe).toHaveBeenCalledTimes(3);
    expect(eventBusMock.unsubscribe).toHaveBeenCalledWith(NotificationsFeedEventsEnum.PENDING_TRANSACTIONS_UPDATE, expect.any(Function));
    expect(eventBusMock.unsubscribe).toHaveBeenCalledWith(NotificationsFeedEventsEnum.TRANSACTIONS_HISTORY_UPDATE, expect.any(Function));
    expect(eventBusMock.unsubscribe).toHaveBeenCalledWith(NotificationsFeedEventsEnum.OPEN_NOTIFICATIONS_FEED, expect.any(Function));
  });
});
