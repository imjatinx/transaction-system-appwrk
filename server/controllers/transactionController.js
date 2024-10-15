const Transaction = require('../model/Transaction');

const calculateBalance = async () => {

    const transactions = await Transaction.find();

    const creditList = transactions.filter(t => t.type === 'credit')
    const totalCredit = creditList.reduce((total, acc) => total += acc.amount, 0)

    const debitList = transactions.filter(t => t.type === 'debit')
    const totalDebit = debitList.reduce((total, acc) => total += acc.amount, 0)

    const runnigBalance = totalCredit - totalDebit
    return runnigBalance;
}

exports.addTransaction = async (req, res) => {
    const { type, amount, description } = req.body;

    if (!type || !amount || !description) {
        res.status(400).json({ status: false, message: "All fields are required" });
    }

    const transaction = new Transaction({ type, amount, description });
    await transaction.save();

    const balance = await calculateBalance();
    transaction.balance = balance;
    await transaction.save();


    res.status(201).json({ status: true, message: 'Transaction successfully', data: transaction })
}


exports.getBalanceSheet = async (req, res) => {

    const transactions = await Transaction.find().sort({ _id: -1 });

    const balanceSheet = {
        transactions: transactions,
    }

    res.status(200).json({ status: true, message: 'Transaction found successfully', data: balanceSheet })
}