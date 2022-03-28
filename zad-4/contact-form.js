class TextValidation
{
    ValidateName()
    {
        if($("#name").val().split(' ').length < 2)
        {
            this.ChangeText("Musisz podać swoje pełne imie i nazwisko!")
            return false
        }

        return true
    }

    ValidateMail()
    {
        let content = $("#mail").val()

        if(!content.includes('@') || !content.includes('.'))
        {
            this.ChangeText("Błędny email!")
            return false
        }

        return true
    }

    ValidateNumber()
    {
        var numbers = /^[-+]?[0-9]+$/;
        if(!$("#telephone").val().replace("+",'').match(numbers))
        {
            this.ChangeText("Zły numer telefonu!")
            return false
        }

        return true
    }

    ValidateMessage()
    {
        if($("#message").val() == "")
        {
            this.ChangeText("Wiadomość jest pusta!")
            return false
        }

        return true
    }

    ValidateForm()
    {
        if(!this.ValidateName() || !this.ValidateMail() || !this.ValidateNumber() || !this.ValidateMessage())
            return;
        
            this.ChangeText("Przesłano")
    }

    ChangeText(text)
    {
        $("#error").text(text)
    }
}

let textValidation = new TextValidation()

$("#submitForm").click(function(){
    textValidation.ValidateForm()
});
