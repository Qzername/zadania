class TextValidation
{
    ValidateName()
    {
        if($("#name").val().split(' ').length < 2)
        {
            alert("Musisz podać swoje pełne imie i nazwisko!")
            return false
        }

        return true
    }

    ValidateMail()
    {
        let content = $("#mail").val()

        if(!content.includes('@') || !content.includes('.'))
        {
            alert("Błędny email!")
            return false
        }

        return true
    }

    ValidateNumber()
    {
        let number = parseInt($("#telephone").val().replace("+",'')) || "NaN"

        if(isNaN(number))
        {
            alert("Zły numer telefonu!")
            return false
        }

        return true
    }

    ValidateMessage()
    {
        if($("#message").val() == "")
        {
            alert("Wiadomość jest pusta!")
            return false
        }

        return true
    }

    ValidateForm()
    {
        if(!this.ValidateName() || !this.ValidateMail() || !this.ValidateNumber() || !this.ValidateMessage())
            return;
        
        alert("OK")
    }
}


let textValidation = new TextValidation()

$("#submitForm").click(function(){
    textValidation.ValidateForm()
});
