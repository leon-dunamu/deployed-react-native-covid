// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView,StatusBar } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import Index from './components/alimi/Index';

export default function App() {
  return (
    <>
      <Index />
    </>
  );
}
