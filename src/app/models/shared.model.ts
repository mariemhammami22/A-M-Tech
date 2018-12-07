export class CartInfo {
    private cartCount = 0;
    addCartElement() {
        this.cartCount++;
    }

    getCartInfo() {
        return this.cartCount;
    }
}
