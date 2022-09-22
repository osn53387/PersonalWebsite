skillList = ["App Development with Andriod Studio", "Java", "Html", "CSS", "javascript", "Google Firebase", "Git", "C/C++", "Emacs"]

for (obj of skillList) {
    var element = document.createElement("a");
    element.classList.add("list-padding")
    element.innerHTML = obj;
    document.getElementById("SkillsList").appendChild(element);
}