//create class using 'class' keyword

class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }
}

let obj=new CustomerDetails()

obj.printFirstName('calling method from customerDetails class')