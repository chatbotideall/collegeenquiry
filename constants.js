// Options the user could type in
const prompts = [
  ["hi"],["college","what is college address","college address","address of college"],["chairman","Chairman"] ,["Principle","principle"],["cse hod","Cse hod"],["canteen","Canteen"],["results"],["College timings","college timings","timings of college"],
  ["number of branches","how many branches available","Branches","branches available"],["holidays"],["CSE Staff","cse staff"],["ECE Staff","ece staff"],["EEE Staff","eee staff"],["MECHANICAL Staff","mechanical staff"],
  ["CIVIL Staff","civil staff"],["HBS staff","hbs staff","first year staff"],["Transportation","transport","Trasport","bus facility","bus facility"],["library","Library"],["parking","Parking"],["placements","Placements"],["ground","Ground","Playground","playground"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello","Hey!","Hii"],["ideal institute of technology vidyutnagar,kakinada,approved by aicte-new delhi&affilated by JNTU-KAKINADA"],["Dr. Paruchuri Krishna Rao M.Sc., Ph.D."],["Dr. T. Srikanth,Ph.D."],
  ["Mr. M.S.R.S. Prasad (M.Tech),Computer Science Engineering Department"],["Canteen facility available in the college."],["you need to paste this url in browser https://www.results.idealtech.edu.in/"],["9:30 AM to 4:10 PM"],
  ["Number of Branches : 5 -CSE(AI),CSE(ML),ECE,EEE,MECH"],["Every second saturday and sunday is holiday and all the public holidays are given"],["Sri. Merla Sri Ravi Sankara Prasad,Smt. P. Radhika Krupalini,Sri R S V V Prasad Rao,Smt. R.V.V.Gani Lakshmi,Smt M Jayasree,Smt S Jyothirmayee,Mr. M. V. V. Chowdary,Mr. K. Ramesh,Mrs. P. Usha Visweswari,MR. S. V. V. S. Gangadhar,Ms. P. Sai Sowjanya,Ms. P. Viswajyothi,Ms.A. Meghana"],
  ["Sri. N. Rajesh Babu,Sri. Bh V S R K Ayyappa Kumar,Sri. B V Kalyan Ram,Sri Ch.Venkata Prakash,Sri. V.K.A.S. Krishnan,Smt.D.Vijaya Lakshmi,Sri P S J Sreeram,Sri. Mortha Varaprasad,Smt. T. Adi Varalakshmi Devi"],
  ["Sri A.Ramesh,Sri. D.Madhu,Sri. Madaka jagadeesh,Kum N Raja Veni,Smt. Bhusam Lalita Kumari,Sri. G. Kiran Kumar,Sri Tammanapudi Veerababu"],
  ["Dr. Tayi Srikanth,K.L.N.Murthy,Sri. Gorsa Ravi Kumar,Smt. R. Vijaya Lakshmi,Sri. Ch.Raju,Sri N. D. Kameswara Rao,Ms. P. Anusha,Mr. P. Rambabu,Mr. M. Nirmal Devi Kiran"],
  ["Mr. Angadi Srinivas,Ms. Kothara Santhi,Smt T B N Satya Sirisha,Sri Sayyed Nazeer Ahmed,Sri. R. Kiran Kumar,Kum.Madireddy Geeta Sri,Kum. V.T.D. Kalyani,Sri. M.T.Ramesh Naidu,Smt M. Neelima"],
  ["Dr. Chodisetty V V S N Murthy,Dr. K Srihari Varma,Smt. K. Vijaya. Lakshmi,Smt. Kanakam Akella,Smt. M. Bhagyalakshmi,Smt. S. Surya Kumari Padala,Kum. V.S.G. Aiswarya,Sri N Rahul Khanna,Smt. Sirisha Meenavalli,Sri M Jahir Khadarir,Sri. K Saibabu,Sri. Gampala Kasiyya,Ms. K. Geethika,Ms. S. Divya,Smt K Anooradha"],["the college has employed qualified and experienced drivers.as there are limited buses/seats transport facility will be provided on first come first serve"],["As a center of intense intellectual inquiry, the Library shares with the college the aspiration to be the most dynamic learning environment."],["parking facility available"]
  ["Communication Skills Training,Soft Skills Training,Life Skills"],["A vast playground with provisions for playing outdoor games like cricket,volleybal,shuttle are in place"]
]


// Random for any other user input

const alternative = [
  "sorry i don't understand",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
