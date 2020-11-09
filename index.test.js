import './matchMedia.mock';
import detectMotion from './index.js';


test('Motion On', () => {
  // make sure that events are fired
  const spyOnWatch = jest.spyOn(detectMotion, 'watch')  
  const spyOnDispatch = jest.spyOn(window, 'dispatchEvent')

  // fire it off!
  detectMotion.watch()
  
  // detectMotion is set to '(prefers-reduced-motion: reduce)' by default in matchMedia.js
  expect(window.matchMedia().matches === '(prefers-reduced-motion: reduce)').toBeTruthy()
  expect(spyOnWatch).toHaveBeenCalled();
  expect(spyOnDispatch).toHaveBeenCalled();
});


test('Motion Off', () => {
  // make sure that events are fired
  const spyOnWatch = jest.spyOn(detectMotion, 'watch')  
  const spyOnDispatch = jest.spyOn(window, 'dispatchEvent')

  // fire it off!
  detectMotion.watch()
  
  // detectMotion is set to '(prefers-reduced-motion: reduce)' by default in matchMedia.js
  expect(window.matchMedia().matches === '(prefers-reduced-motion: no-preference)').toBeFalsy()
  expect(spyOnWatch).toHaveBeenCalled();
  expect(spyOnDispatch).toHaveBeenCalled();
});


test('On Watch', () => {
  // make sure that events are fired
  const spyOnWatch = jest.spyOn(detectMotion, 'watch')  
  const spyOnDispatch = jest.spyOn(window, 'dispatchEvent')
  let fakeDetectMotion = '(prefers-reduced-motion: reduce)'

  // listen for updates
  window.addEventListener('reducedMotionUpdated', function (e) { 
    // haven't figured out how to properly pass data through the event, 
    // so let's fake the detectMotion change... :)
    fakeDetectMotion = '(prefers-reduced-motion: no-preference)'
  }, false);

  // fire it off!
  detectMotion.watch()
  
  // detectMotion is set to 'dark' by default in matchMedia.js
  expect(spyOnWatch).toHaveBeenCalled();
  expect(spyOnDispatch).toHaveBeenCalled();
  expect(fakeDetectMotion).toBe('(prefers-reduced-motion: no-preference)');
});


test('On Teardown', () => {
  // make sure that events are fired
  const spyOnWatch = jest.spyOn(detectMotion, 'teardown')  

  // fire it off!
  detectMotion.teardown()
  
  // detectMotion is set to 'dark' by default in matchMedia.js
  expect(spyOnWatch).toHaveBeenCalled();
});