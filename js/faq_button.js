var btn = document.getElementsByClassName("faq");
var i;
for (i = 0; i < faq.length; i++)
    {
     btn[i].addEventListener("click", function()
        {
        this.classList.toggle("active")
        var panel = this.nextElementSibling;
        if (panel.style.display === "block")    {
                                                panel.style.display = "none";
                                                }
        else {
            panel.style.display = "block";
        }
    });
        }