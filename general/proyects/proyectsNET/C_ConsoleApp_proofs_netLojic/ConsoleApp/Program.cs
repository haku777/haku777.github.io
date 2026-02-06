using System;
using System.Text;
using System.Xml.Linq;
using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations;
using static System.Net.Mime.MediaTypeNames;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Proofs
{
    class Methodo
    {
        public string Method(string str, string anotherString = " ",int number = 66)
        {
            return number.ToString();
        }
        public string swit(int number){
            switch (number)
            {
                case var x when x >= 1 && x <= 3:return "yes";
                    default: return "eje: case when";
            }
        }

        public string str()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("concatena texto ");
            sb.Append("usando string builder. ");
            string result = sb.ToString();
            return result;
        }

        public string dic()
        {
            var m = new Dictionary<object, int>();
            var o1 = new object();
            var o2 = o1;
            m[o1] = 1;
            m[o2] = 2;//esto sobrescribe la entrada anterior en el diccionario
            return m[o1].ToString();
        }
    }



    class Program
    {
        static void Main(string[] args)
        {
            var text = "  a31aF4s.    s2,d sAS|zZdda a45a87s sd977d  ";
            var textSpace = Regex.Replace(text, @"\s+", " ").Trim();
            var textNumber = text.Count(c => char.IsDigit(c));
            var textLetter = Regex.Matches(text, @"[a-z]").Count();
            var textLetterNorepeat = Regex.Matches(text, @"\d+").Count();
            var textOneLetter = text.Count(c => char.IsDigit(c));


            Console.WriteLine("sin espacios: " + textSpace);
            Console.WriteLine("solo numeros: " + textNumber);
            Console.WriteLine("solo letras: " + textLetter);
            Console.WriteLine("solo letras sin repetir: " + textLetterNorepeat);
            Console.WriteLine("la letra a: " + textOneLetter);



            var list = new List<int>(2);
            list.Add(1);
            list.Add(1);
            list.Add(1);

            Console.WriteLine("list<int>(2) = " + list.Count);

            Methodo myObj = new Methodo();
            string result = myObj.Method("str", number: 42);
            Console.WriteLine("Method change atrib = " + result);

            var hashSet = new HashSet<int>();
            hashSet.Add(1);
            hashSet.Add(1);
            hashSet.Add(2);

            Console.WriteLine("hashSet = " + hashSet.Count);

            int number = 42;
            Console.WriteLine(myObj.swit(number));
            Console.WriteLine(myObj.str());
            Console.WriteLine("dicionary = " + myObj.dic());





        }
    }
}