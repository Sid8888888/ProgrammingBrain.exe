export const Answer0 = [
  "JavaScript\nfunction printZero(count) {\n  if (count === 0) {\n    console.log(0);\n    return;\n  }\n  printZero(count - 1);\n}\nprintZero(0);",
  "Python\ndef print_zero(count):\n  if count == 0:\n    print(0)\n  else:\n    print_zero(count - 1)\nprint_zero(0)",
  "C\n#include <stdio.h>\n\nvoid printZero(int count) {\n  if (count == 0) {\n    printf(\"%d\", 0);\n  }\n  else {\n    printZero(count - 1);\n  }\n}\n\nint main() {\n  printZero(0);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void printZero(int count) {\n    if (count == 0) {\n      System.out.println(0);\n    }\n    else {\n      printZero(count - 1);\n    }\n  }\n\n  public static void main(String[] args) {\n    printZero(0);\n  }\n}",
  "Ruby\ndef print_zero(count)\n  if count == 0\n    puts 0\n  else\n    print_zero(count - 1)\n  end\nend\nprint_zero(0)",
  "PHP\n<?php\nfunction printZero($count) {\n  if ($count == 0) {\n    echo 0;\n  }\n  else {\n    printZero($count - 1);\n  }\n}\n\nprintZero(0);\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc printZero(count int) {\n  if count == 0 {\n    fmt.Println(0)\n  }\n  else {\n    printZero(count - 1)\n  }\n}\n\nfunc main() {\n  printZero(0)\n}",
  "Swift\nfunc printZero(count: Int) {\n  if count == 0 {\n    print(0)\n  }\n  else {\n    printZero(count: count - 1)\n  }\n}\n\nprintZero(count: 0)",
  "C++\n#include <iostream>\nusing namespace std;\n\nvoid printZero(int count) {\n  if (count == 0) {\n    cout << 0;\n  }\n  else {\n    printZero(count - 1);\n  }\n}\n\nint main() {\n  printZero(0);\n  return 0;\n}",
  "TypeScript\nfunction printZero(count: number): void {\n  if (count === 0) {\n    console.log(0);\n  }\n  else {\n    printZero(count - 1);\n  }\n}\n\nprintZero(0);"
];

export const Answer1 = [
  "JavaScript\nconst arr = [1];\narr.map(num => console.log(num));",
  "Python\ndef one_generator():\n  yield 1\nfor num in one_generator():\n  print(num)",
  "C\n#include <stdio.h>\n\nint main() {\n  int arr[] = {1};\n  int* ptr = arr;\n  printf(\"%d\", *ptr);\n  return 0;\n}",
  "Java\nimport java.util.stream.IntStream;\n\npublic class Main {\n  public static void main(String[] args) {\n    IntStream.of(1).forEach(System.out::println);\n  }\n}",
  "Ruby\ndef print_one\n  [1].each { |num| puts num }\nend\nprint_one",
  "PHP\n<?php\n$array = [1];\nforeach ($array as $num) {\n  echo $num;\n}\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  arr := []int{1}\n  for _, num := range arr {\n    fmt.Println(num)\n  }\n}",
  "Swift\nlet arr = [1]\narr.forEach { num in print(num) }",
  "C++\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n  vector<int> arr = {1};\n  for (auto num : arr) {\n    cout << num;\n  }\n  return 0;\n}",
  "TypeScript\nconst set = new Set([1]);\nset.forEach(num => console.log(num));"
];

export const Answer2 = [
  "JavaScript\nfunction generateTwo() {\n  return function() {\n    return 2;\n  };\n}\n\nconst getTwo = generateTwo();\nconsole.log(getTwo());",
  "Python\nclass Output:\n  def get_number(self):\n    return 2\noutput = Output()\nprint(output.get_number())",
  "C\n#include <stdio.h>\n\nint getTwo() {\n  return 2;\n}\n\nint main() {\n  int (*func_ptr)() = getTwo;\n  printf(\"%d\", func_ptr());\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    Runnable getTwo = () -> System.out.println(2);\n    getTwo.run();\n  }\n}",
  "Ruby\ndef get_two\n  yield 2\nend\nget_two { |num| puts num }",
  "PHP\n<?php\nfunction getTwo() {\n  return 2;\n}\n\necho getTwo();\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  m := map[string]int{\"two\": 2}\n  fmt.Println(m[\"two\"])\n}",
  "Swift\nlet dict = [\"two\": 2]\nif let num = dict[\"two\"] {\n  print(num)\n}",
  "C++\n#include <iostream>\n#include <functional>\nusing namespace std;\n\nint main() {\n  function<int()> getTwo = []() { return 2; };\n  cout << getTwo();\n  return 0;\n}",
  "TypeScript\nconst getTwo = () => ({ num: 2 });\nconst { num } = getTwo();\nconsole.log(num);"
];

export const Answer3 = [
  "JavaScript\nfunction printThree() {\n  return 3;\n}\nconsole.log(printThree());",
  "Python\ndef print_three:\n  print(3)\nprint_three",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 3;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 3;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_three\n  [3].each { |num| puts num }\nend\nprint_three",
  "PHP\n<?php\necho 3;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(3)\n}",
  "Swift\nlet three = 3;\nprint(three);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 3;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst three = 3;\nconsole.log(three);"
];

export const Answer4 = [
  "JavaScript\nfunction printFour() {\n  return 4;\n}\nconsole.log(printFour());",
  "Python\ndef print_four:\n  print(4)\nprint_four",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 4;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 4;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_four\n  [4].each { |num| puts num }\nend\nprint_four",
  "PHP\n<?php\necho 4;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(4)\n}",
  "Swift\nlet four = 4;\nprint(four);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 4;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst four = 4;\nconsole.log(four);"
];

export const Answer5 = [
  "JavaScript\nfunction printFive() {\n  return 5;\n}\nconsole.log(printFive());",
  "Python\ndef print_five:\n  print(5)\nprint_five",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 5;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 5;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_five\n  [5].each { |num| puts num }\nend\nprint_five",
  "PHP\n<?php\necho 5;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(5)\n}",
  "Swift\nlet five = 5;\nprint(five);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 5;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst five = 5;\nconsole.log(five);"
];

export const Answer6 = [
  "JavaScript\nfunction printSix() {\n  return 6;\n}\nconsole.log(printSix());",
  "Python\ndef print_six:\n  print(6)\nprint_six",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 6;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 6;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_six\n  [6].each { |num| puts num }\nend\nprint_six",
  "PHP\n<?php\necho 6;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(6)\n}",
  "Swift\nlet six = 6;\nprint(six);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 6;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst six = 6;\nconsole.log(six);"
];

export const Answer7 = [
  "JavaScript\nfunction printSeven() {\n  return 7;\n}\nconsole.log(printSeven());",
  "Python\ndef print_seven:\n  print(7)\nprint_seven",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 7;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 7;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_seven\n  [7].each { |num| puts num }\nend\nprint_seven",
  "PHP\n<?php\necho 7;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(7)\n}",
  "Swift\nlet seven = 7;\nprint(seven);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 7;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst seven = 7;\nconsole.log(seven);"
];

export const Answer8 = [
  "JavaScript\nfunction printEight() {\n  return 8;\n}\nconsole.log(printEight());",
  "Python\ndef print_eight:\n  print(8)\nprint_eight",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 8;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 8;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_eight\n  [8].each { |num| puts num }\nend\nprint_eight",
  "PHP\n<?php\necho 8;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(8)\n}",
  "Swift\nlet eight = 8;\nprint(eight);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 8;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst eight = 8;\nconsole.log(eight);"
];

export const Answer9 = [
  "JavaScript\nfunction printNine() {\n  return 9;\n}\nconsole.log(printNine());",
  "Python\ndef print_nine:\n  print(9)\nprint_nine",
  "C\n#include <stdio.h>\n\nint main() {\n  int num = 9;\n  printf(\"%d\", num);\n  return 0;\n}",
  "Java\npublic class Main {\n  public static void main(String[] args) {\n    int num = 9;\n    System.out.println(num);\n  }\n}",
  "Ruby\ndef print_nine\n  [9].each { |num| puts num }\nend\nprint_nine",
  "PHP\n<?php\necho 9;\n?>",
  "Go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  fmt.Println(9)\n}",
  "Swift\nlet nine = 9;\nprint(nine);",
  "C++\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int num = 9;\n  cout << num;\n  return 0;\n}",
  "TypeScript\nconst nine = 9;\nconsole.log(nine);"
];
