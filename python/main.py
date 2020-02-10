from modules.person import Person
from modules.people import People

person1 = Person("Craig", "Chambers", "21/01/1968")
person2 = Person("Lance", "Smith", "23/12/2002")

people = People()

people.addPerson(person1)
people.addPerson(person2)

people.listPeople()
