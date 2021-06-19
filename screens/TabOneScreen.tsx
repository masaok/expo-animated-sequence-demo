import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
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

const TabOneScreen = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    animateSequence()
  }, [])

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
    </View>
  )
}

export default TabOneScreen
