#include <iostream>

class Console {
	public:
		void log(std::string message)
		{
			std::cout << message << "\n";
		};
};

Console console;
int main()
{
	console.log("hehe");
}