import { greet } from "./greet";

describe('greet', () => {
    it('should include name in result', () => {
        expect(greet('Angular')).toBe('Hello Angular');
    });
});