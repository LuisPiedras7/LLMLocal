import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto y nombre */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=12' }} // Imagen aleatoria
          style={styles.avatar}
        />
        <Text style={styles.name}>Medu</Text>
        <Text style={styles.username}>@medu</Text>
      </View>

      {/* Botones */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={[styles.buttonText, styles.secondaryButtonText]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Información */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Información</Text>
        <Text style={styles.infoText}>📧 Email: hola@medu.mx</Text>
        <Text style={styles.infoText}>📍 Ubicación: Ciudad de México</Text>
        <Text style={styles.infoText}>🌐 Sitio Web: www.medu.mx</Text>
        <Text style={styles.infoText}>📞 Teléfono: 55-4847-4975</Text>
      </View>

      {/* Estadísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Mensajes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>50</Text>
          <Text style={styles.statLabel}>Contactos</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Grupos</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 16,
    color: 'gray'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginHorizontal: 5
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007BFF'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  secondaryButtonText: {
    color: '#007BFF'
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    marginBottom: 20
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: 'space-around',
    width: '100%'
  },
  stat: {
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF'
  },
  statLabel: {
    fontSize: 14,
    color: 'gray'
  }
});
