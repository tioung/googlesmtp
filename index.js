const formTest=document.querySelector('.form-test')

formTest.addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=formTest.name.value
    const email=formTest.email.value
    const subject=formTest.subject.value
    const telephone=formTest.telephone.value
    const message=formTest.message.value

    Email.send({
        Host : "smtp.gmail.com",
        Username : "dakchoy@gmail.com",
        Password : "txscgswevqbzxhiy",
        To : "dakchoy@gmail.com",
        From : `${email}`,
        Subject : `Kindwood: ${name}`,
        Body : `Name: ${name}
                Email: ${email}
                Telephone: ${telephone}
                Subject: ${subject}<br>
                Message: ${message}`
    }).then(
      message => alert('Thank you for your email. We will get back to you soon.')
    )

    formTest.reset()

})
