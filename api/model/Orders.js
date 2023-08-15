// orders
class Orders {
    // = ORDERS = \\
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM Orders
        JOIN users ON orders.userID = users.id
        JOIN books ON orders.booksID = books.id
        WHERE orders.userID = ?;`
        db.query(query, [userID], async (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    // == SINGLE ORDER == \\
    fetchOrder(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM orders
        JOIN users ON orders.userID = user.id
        JOIN books ON orders.bookID = books.id
        WHERE orderID = ${req.params.id};`
        db.query(query, (req, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    // === REGISTER ORDER === \\
    async registerOrder(req, res) {
        
    }
    
}
module.exports = Orders