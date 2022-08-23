/* eslint-disable no-console */
import chalk from 'chalk';
import util from 'util';

// eslint-disable-next-line import/prefer-default-export
export const log = {
  good: (message) => console.log('Good!', chalk.rgb(194, 242, 128)(util.inspect(message, { showHidden: false, depth: null, colors: true }))),
  warn: (message) => console.log('Warning', chalk.rgb(255, 119, 0)(util.inspect(message, { showHidden: false, depth: null, colors: true }))),
  error: (message) => console.log('ERROR', chalk.rgb(249, 65, 68).bold(util.inspect(message, { showHidden: false, depth: null, colors: true }))),
  status: (message) => console.log('status', chalk.rgb(0, 180, 216)(util.inspect(message, { showHidden: false, depth: null, colors: true }))),
  debug: (message) => console.log('DEBUG:', chalk.rgb(116, 0, 184)(util.inspect(message, { showHidden: false, depth: null, colors: true }))),
};
