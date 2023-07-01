import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='title'>
        <h1 className='titlek'>Why I love you Kristina Manukyan</h1>
      </div>
      <div className='mainimage'>
    <div className='image-border'>
        <Image src="/main.jpg" alt="Picture 1" width={500} height={0} />
    </div>
</div>
<div className='mainimage2'>
    <div className='image-content'>
        <Image src="/butt.gif" alt="Main Gif" width={300} height={500} />
    </div>
</div>
<div className='mainimage3'>
    <div className='image-content2'>
        <Image src="/beautiful2.gif" alt="Main Gif" width={300} height={600} />
    </div>
</div>

      <div className='image-gallery'>
        <div className='image-row'>
          <div className='text-column left-text'>
            <p>Kristina Manukyan, I'm so lucky to have you all to myself. Even though you undyingly love lemons you are the sweetest thing in the world. You are everything I could ever ask for, all the joy, happiness and peace i've felt in the last 9 months have been because of you. </p>
          </div>
          <div className='image-column right-image'>
            <div className='image-container'>
            <Image src="/jan7.2.png" alt="Picture 7" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className='image-row'>
          <div className='image-column left-image'>
            <div className='image-container'>
              <Image src="/jan2.jpg" alt="Picture 2" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className='text-column right-text'>
            <p>You inspire me everyday, you let me do things I never thought I could do. You push me to greater lengths than I could ever dream and I could only hope that I do a fraction of the same for you. The only reason I started running, went back to boxing and am just generally more comfortable with people is because of you. You only changed me for the better.</p>
          </div>
        </div>
        <div className='image-row'>
          <div className='text-column left-text'>
            <p>You are kind and caring, you always put others before you. Your empathy and consideration is so genuine and I really love that about you. The way you give everyone a chance and are especially loving with those who are close to you is really cute.</p>
          </div>
          <div className='image-column right-image'>
            <div className='image-container'>
              <Image src="/jan3.jpg" alt="Picture 3" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className='image-row'>
          <div className='image-column left-image'>
            <div className='image-container'>
              <Image src="/jan4.jpg" alt="Picture 4" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className='text-column right-text'>
            <p>You share my sense of humor and make me laugh constantly. I love being around you so much, you get my jokes and enjoy them. Nothing makes me happier than making you happy. I love our gossip and our inside jokes, I love how I can share anything with you confidently and in-depth.</p>
          </div>
        </div>
        <div className='image-row'>
          <div className='text-column left-text'>
            <p>I love it SO much when you get really excited about something, you're so passionate about what you want to do or get done. Also, Sima chose you so already thats a massive green light. Seeing you get excited about something gets me excited about it, your enthusiasm about anything is really contagious and I love it so much.</p>
          </div>
          <div className='image-column right-image'>
            <div className='image-container'>
              <Image src="/jan5.2.jpg" alt="Picture 5" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        <div className='image-row'>
          <div className='image-column left-image'>
            <div className='image-container'>
              <Image src="/jan6.jpg" alt="Picture 6" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className='text-column right-text'>
            <p>Going out into the world with you is actually fun, and I look forward to it everytime. It got to the point where I dont want to go anywhere if it isn't with you. When we go places you inspire me to try new things, act better and look better. I don't know where I would be as a person if it wasn't for you but I know it would definitely be a downgrade.</p>
          </div>
        </div>
        <div className='image-row'>
          <div className='text-column left-text'>
            <p>ես քեզ շատ եմ սիրում Kristina Manukyan. I am so grateful to have you in my life, I look forward to all the adventures we'll have together and all of the moments we'll share, the good and the bad. There is no other person I would rather have in my life than you. You are smart, kind, funny and beautiful I love you Kristina Manukyan.</p>
          </div>
          <div className='image-column right-image'>
            <div className='image-container'>
              <Image src="/jan1.jpg" alt="Picture 1" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
