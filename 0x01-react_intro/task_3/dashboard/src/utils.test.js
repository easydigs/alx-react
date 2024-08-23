import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Mock the current year to avoid the time bomb issue
const mockYear = new Date().getFullYear();

test('returns current year', () => {
	expect(getFullYear()).toBe(mockYear);
});

test('correct footer copy', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
	expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns right notification', () => {
	expect(getLatestNotification()).toBe(
		'<strong>Urgent Requirement</strong> - complete by EOD'
	);
});
