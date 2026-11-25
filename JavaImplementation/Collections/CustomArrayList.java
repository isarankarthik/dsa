package JavaImplementation.Collections;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

// this is just the inbuilt array list, just for the learning purposes.

class People {
    String name;
    int age;

    People(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    @Override 
    public String toString()
    {
        return this.name + "(" + this.age + ")";
    }
}
public class CustomArrayList {
    public static void main(String[] args) {
        // this is list of type People class.
        List<People> peopleList = new ArrayList<>();
        // this is the list of type String
        List<String> peopleName = new ArrayList<>();
        peopleList.add(new People("Achintya", 25));
        Collections.addAll(peopleList, new People("Ganesh", 23), new People("Nitesh Nanda", 24));
        System.out.println(peopleList);

        peopleName.add("Achintya");
        // Note point. This is to give array of inputs if the List is of type string.
        Collections.addAll(peopleName, new String[] { "Rahmath", "Suresh", "Ramesh" });
        System.out.println(peopleName);

        // remove an element from the list 

        /*
        1. Conditional removing using removeIf 
        2. Removing using normal remove() function. 
        */

        peopleName.removeIf(name -> (name == "Suresh"));
        System.out.println(peopleName);
        
        peopleList.remove(peopleList.size() - 1);
        System.out.println(peopleName.contains("Rahmath"));
        System.out.println(peopleList);

        /* Itertator is used to iterate over the collections. Normal loop cannot be used.
        In order to iterate over the created iterator, we first create a variable of type iterator and then use it to iterate it.
        
        functions available : 
        hasNext() -> checks if there's next element available or not.
        next() -> used to return the next available element. If not present, then NoSuchElementException will be thrown.
        remove() -> used to remove the element from the list. This remove is different from the remove which we have in the collection. That's why this remove doesn't need the index of the element to be specified for removal.
        */

        Iterator<String> itr = peopleName.iterator();

        while (itr.hasNext())
        {
            String name = itr.next();
            System.out.println(name);
            // if (name == "Ramesh") {
            //     itr.remove();
            // } 
        }

        // printing from the reverse of the list using List Iterator

        ListIterator<String> listItr = peopleName.listIterator(peopleName.size());
        while (listItr.hasPrevious()) {
            String name = listItr.previous();
            System.out.println(name);
        }

    }
}
