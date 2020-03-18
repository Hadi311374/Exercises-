1398-12-24
    Tuple
        Array-like structure where each element represents some property of a record
    Interfaces
        Creates a new type, describing the property names and value types of an object
    General Strategy for Reusable Code in TS
        Creat functions that accept arguments that are typed with interfaces
        Objects/classes can decide to implement a given interface to work with a function
    Classes
        Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'
    Modifiers
        Public
            This method can be called any where, any time
        Private
            This method can only be called by other methods in this class
        Protected
            This method can be called by other meethods in this class, or by other methods in child classes