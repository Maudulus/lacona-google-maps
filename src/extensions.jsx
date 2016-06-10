/** @jsx createElement */
import { createElement } from 'elliptical'
import { Command } from 'lacona-phrases'
import { String } from 'lacona-phrases'
import { runApplescript } from 'lacona-api'
import { openURL } from 'lacona-api'

export const MyNewCommand = {
  extends: [Command],

  execute (result) {
    const directionStr = 'https://www.google.com/maps/dir/'+result.origin+'/'+result.destination+'/'
    openURL({url: encodeURI(directionStr)})
  },

  describe ({config}) {
    return (
      <sequence>
        <literal text='directions between ' />
        <String argument='origin' id='origin' limit={1} argument='origin' />
        <literal text=' and ' />
        <String argument='destination' id='destination' consumeAll argument='destination' />
      </sequence>      
    )
  }
}

export default [MyNewCommand]
