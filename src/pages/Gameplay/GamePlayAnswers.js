export const Answer0 = [
    "JavaScript\nfunction printZero(count) { if (count === 0) { console.log(0); return; } printZero(count - 1); } printZero(0);",
    "Python\ndef print_zero(count): if count == 0: print(0) else: print_zero(count - 1) print_zero(0)",
    "C\n#include <stdio.h> void printZero(int count) { if (count == 0) { printf(\"%d\", 0); } else { printZero(count - 1); } } int main() { printZero(0); return 0; }",
    "Java\npublic class Main { public static void printZero(int count) { if (count == 0) { System.out.println(0); } else { printZero(count - 1); } } public static void main(String[] args) { printZero(0); } }",
    "Ruby\ndef print_zero arr = [0] arr.each { |num| puts num } end print_zero",
    "PHP\n<?php function printZero($count) { if ($count == 0) { echo 0; } else { printZero($count - 1); } } printZero(0); ?>",
    "Go\npackage main import \"fmt\" func printZero(count int) { if count == 0 { fmt.Println(0) } else { printZero(count - 1) } } func main() { printZero(0) }",
    "Swift\nfunc printZero(count: Int) { if count == 0 { print(0) } else { printZero(count: count - 1) } } printZero(count: 0)",
    "C++\n#include <iostream> using namespace std; void printZero(int count) { if (count == 0) { cout << 0; } else { printZero(count - 1); } } int main() { printZero(0); return 0; }",
    "TypeScript\nfunction printZero(count: number): void { if (count === 0) { console.log(0); } else { printZero(count - 1); } } printZero(0);"
  ];
  
  export const Answer1 = [
    "JavaScript\nconst arr = [1]; arr.map(num => console.log(num));",
    "Python\ndef one_generator(): yield 1 for num in one_generator(): print(num)",
    "C\n#include <stdio.h> int main() { int arr[] = {1}; int* ptr = arr; printf(\"%d\", *ptr); return 0; }",
    "Java\nimport java.util.stream.IntStream; public class Main { public static void main(String[] args) { IntStream.of(1).forEach(System.out::println); } }",
    "Ruby\ndef print_one [1].each { |num| puts num } end print_one",
    "PHP\n<?php $array = [1]; foreach ($array as $num) { echo $num; } ?>",
    "Go\npackage main import \"fmt\" func main() { arr := []int{1} for _, num := range arr { fmt.Println(num) } }",
    "Swift\nlet arr = [1] arr.forEach { num in print(num) }",
    "C++\n#include <iostream> #include <vector> using namespace std; int main() { vector<int> arr = {1}; for (auto num : arr) { cout << num; } return 0; }",
    "TypeScript\nconst set = new Set([1]); set.forEach(num => console.log(num));"
  ];
  
  export const Answer2 = [
    "JavaScript\nfunction generateTwo() { return function() { return 2; }; } const getTwo = generateTwo(); console.log(getTwo());",
    "Python\nclass Output: def get_number(self): return 2 output = Output() print(output.get_number())",
    "C\n#include <stdio.h> int getTwo() { return 2; } int main() { int (*func_ptr)() = getTwo; printf(\"%d\", func_ptr()); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { Runnable getTwo = () -> System.out.println(2); getTwo.run(); } }",
    "Ruby\ndef get_two yield 2 end get_two { |num| puts num }",
    "PHP\n<?php function getTwo() { return 2; } echo getTwo(); ?>",
    "Go\npackage main import \"fmt\" func main() { m := map[string]int{\"two\": 2} fmt.Println(m[\"two\"]) }",
    "Swift\nlet dict = [\"two\": 2] if let num = dict[\"two\"] { print(num) }",
    "C++\n#include <iostream> #include <functional> using namespace std; int main() { function<int()> getTwo = []() { return 2; }; cout << getTwo(); return 0; }",
    "TypeScript\nconst getTwo = () => ({ num: 2 }); const { num } = getTwo(); console.log(num);"
  ];
  
  export const Answer3 = [
    "JavaScript\nfunction printThree() { return 3; } console.log(printThree());",
    "Python\ndef print_three: print(3) print_three",
    "C\n#include <stdio.h> int main() { int num = 3; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 3; System.out.println(num); } }",
    "Ruby\ndef print_three [3].each { |num| puts num } end print_three",
    "PHP\n<?php echo 3; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(3) }",
    "Swift\nlet three = 3; console.log(three);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 3; cout << num; return 0; }",
    "TypeScript\nconst three = 3; console.log(three);"
  ];
  
  export const Answer4 = [
    "JavaScript\nfunction printFour() { return 4; } console.log(printFour());",
    "Python\ndef print_four: print(4) print_four",
    "C\n#include <stdio.h> int main() { int num = 4; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 4; System.out.println(num); } }",
    "Ruby\ndef print_four [4].each { |num| puts num } end print_four",
    "PHP\n<?php echo 4; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(4) }",
    "Swift\nlet four = 4; console.log(four);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 4; cout << num; return 0; }",
    "TypeScript\nconst four = 4; console.log(four);"
  ];
  
  export const Answer5 = [
    "JavaScript\nfunction printFive() { return 5; } console.log(printFive());",
    "Python\ndef print_five: print(5) print_five",
    "C\n#include <stdio.h> int main() { int num = 5; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 5; System.out.println(num); } }",
    "Ruby\ndef print_five [5].each { |num| puts num } end print_five",
    "PHP\n<?php echo 5; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(5) }",
    "Swift\nlet five = 5; console.log(five);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 5; cout << num; return 0; }",
    "TypeScript\nconst five = 5; console.log(five);"
  ];
  
  export const Answer6 = [
    "JavaScript\nfunction printSix() { return 6; } console.log(printSix());",
    "Python\ndef print_six: print(6) print_six",
    "C\n#include <stdio.h> int main() { int num = 6; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 6; System.out.println(num); } }",
    "Ruby\ndef print_six [6].each { |num| puts num } end print_six",
    "PHP\n<?php echo 6; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(6) }",
    "Swift\nlet six = 6; console.log(six);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 6; cout << num; return 0; }",
    "TypeScript\nconst six = 6; console.log(six);"
  ];
  
  export const Answer7 = [
    "JavaScript\nfunction printSeven() { return 7; } console.log(printSeven());",
    "Python\ndef print_seven: print(7) print_seven",
    "C\n#include <stdio.h> int main() { int num = 7; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 7; System.out.println(num); } }",
    "Ruby\ndef print_seven [7].each { |num| puts num } end print_seven",
    "PHP\n<?php echo 7; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(7) }",
    "Swift\nlet seven = 7; console.log(seven);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 7; cout << num; return 0; }",
    "TypeScript\nconst seven = 7; console.log(seven);"
  ];
  
  export const Answer8 = [
    "JavaScript\nfunction printEight() { return 8; } console.log(printEight());",
    "Python\ndef print_eight: print(8) print_eight",
    "C\n#include <stdio.h> int main() { int num = 8; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 8; System.out.println(num); } }",
    "Ruby\ndef print_eight [8].each { |num| puts num } end print_eight",
    "PHP\n<?php echo 8; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(8) }",
    "Swift\nlet eight = 8; console.log(eight);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 8; cout << num; return 0; }",
    "TypeScript\nconst eight = 8; console.log(eight);"
  ];
  
  export const Answer9 = [
    "JavaScript\nfunction printNine() { return 9; } console.log(printNine());",
    "Python\ndef print_nine: print(9) print_nine",
    "C\n#include <stdio.h> int main() { int num = 9; printf(\"%d\", num); return 0; }",
    "Java\npublic class Main { public static void main(String[] args) { int num = 9; System.out.println(num); } }",
    "Ruby\ndef print_nine [9].each { |num| puts num } end print_nine",
    "PHP\n<?php echo 9; ?>",
    "Go\npackage main import \"fmt\" func main() { fmt.Println(9) }",
    "Swift\nlet nine = 9; console.log(nine);",
    "C++\n#include <iostream> using namespace std; int main() { int num = 9; cout << num; return 0; }",
    "TypeScript\nconst nine = 9; console.log(nine);"
  ];
  