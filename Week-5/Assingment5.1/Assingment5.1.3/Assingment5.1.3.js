function createTransactionIdGenerator() {
    let counter = 0;
  
    return function generateTransactionId() {
      const transactionId = Symbol(`TRANSACTION_ID_${++counter}`);
      return transactionId;
    };
  }
  
  const generateTransactionId = createTransactionIdGenerator();
  
  const transaction1 = generateTransactionId();
  console.log(transaction1); 
  
  const transaction2 = generateTransactionId();
  console.log(transaction2); 
  
  const transaction3 = generateTransactionId();
  console.log(transaction3); 
  