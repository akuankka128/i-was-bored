using System;

public static class console
{
    public static void log(string message)
    {
        Console.WriteLine(message);
    }
}

public class Application {
    public static void main()
    {
        console.log("Hehe");
        Console.ReadKey();
    }
}