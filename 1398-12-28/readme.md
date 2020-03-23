1398-12-28
    Refactor class 'Sorter'
        Use interface instead of class NumbersCollection
    Create class 'CharactersCollection'
        For sort Characters at project
    Create class 'LinkedList'
        For focus on the linked list implementation
    Inheritance
        Class 'NumbersCollection' Inheritance  from 'Sorter'
    Abstract Classes
        Can't be used to create an objectly
        Only used as a parent class 
        Can contain real implementation for some methods 
        The implemented methods can refer to other methods that don't actually exist yet 
    Interfaces VS Inheritance/Abstract Classes
        Interfaces
            Sets up a contract between different classes
            Use when we have very different objects that we want to work togther
            Promotes loose 
        Inheritance/Abstract Classes
            Sets up a contract between different classes
            Use when we are trying to build up a definition of an object
            Strongly couples classes together
