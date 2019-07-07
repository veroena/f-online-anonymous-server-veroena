'use strict';

const menu = document.querySelector('.nav');
const trigger = document.querySelector('.nav-trigger');
const close = document.querySelector('.nav-close');

const handleMenu = () => {
  menu.classList.toggle('slide-in');
}

trigger.addEventListener('click', handleMenu);
close.addEventListener('click', handleMenu);
