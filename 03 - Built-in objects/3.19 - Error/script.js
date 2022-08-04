// Error
try {
    throw new Error("Oops! Ocorreu um erro")
} catch(e){
    console.log(e.name + ": " + e.message)
}
