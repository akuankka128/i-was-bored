class console
{
    public static void log(Object message)
    {
        System.out.println(message.toString());
    }
}

public class Main
{
    public static void main(String[] args)
    {
        console.log("Hehe");
    }
}