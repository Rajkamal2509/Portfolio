var typed=new Typed(".text",{
    strings:["Angular Developer","Mean Stack Developer","Backend Developer"],
    typeSpeed:40,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


function sendEmail() {
	Email.send({
    SecureToken : "<your generated token>",
    To : 'recipient@example.com',
    From : "sender@example.com",
    Subject : "Test Email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br/></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
}
