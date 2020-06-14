import Page from '@components/page';
import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerchildren: 0.5
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

export default function MobileNav() {
  return (
    <Page title='Mobile Navigation'>
      <div className='mobile-navigation' variants={container} initial="hidden" animate="show">
        <Link href='/'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>01. Home</motion.div>
        </Link>
        <Link href='/remedies'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>02. Remedies</motion.div>
        </Link>
        <Link href='/methods'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>03. Methods</motion.div>
        </Link>
        <Link href='/subscriptions'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>04. Subscription</motion.div>
        </Link>
        <Link href='/about'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>05. About</motion.div>
        </Link>
        <Link href='/contact'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>06. Contact</motion.div>
        </Link>
        <Link href='/account'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>07. Account</motion.div>
        </Link>
        <Link href='/cart'>
          <motion.div variants={item} className='mobile-navigation__link heading-2'>07. My Cart</motion.div>
        </Link>
      </div>
    </Page>
  );
}
