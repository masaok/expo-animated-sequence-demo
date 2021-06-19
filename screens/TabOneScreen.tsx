import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

// https://stackoverflow.com/questions/44368194/react-js-sequence-of-timed-state-changes
const TabOneScreen = () => {
  const [count, setCount] = useState(0)

  const animateSequence = () => {
    const TOTAL = 3
    var setActive = setInterval(() => {
      console.log('SET INTERVAL > COUNT: ' + count)
      setCount(count + 1)
      if (count === TOTAL) {
        clearInterval(setActive)
      }
    }, 1000)
  }

  useEffect(() => {
    animateSequence()
  }, [])

  useEffect(() => {
    console.log('COUNT EFFECT > COUNT: ' + count)
    setCount(count + 1)
  }, [count])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
    </View>
  )
}

export default TabOneScreen
