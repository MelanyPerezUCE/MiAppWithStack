# MiAppWithStack - React Native Expo App

Una aplicación móvil desarrollada con **React Native** y **Expo**, implementando **Stack Navigation** para la navegación entre pantallas.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior) - [Descargar](https://nodejs.org/)
- **npm** o **yarn** (generalmente viene con Node.js)


## 📱 Ejecutar la aplicación

### En desarrollo local

```bash
npx expo start
```

Se abrirá una interfaz interactiva en la terminal donde podrás:
- Presionar **`i`** para abrir en iOS Simulator
- Presionar **`a`** para abrir en Android Emulator
- Presionar **`w`** para abrir en navegador web
- Escanear el código QR con la app **Expo Go** en tu dispositivo móvil

### En Android

```bash
npm run android
```

### En iOS

```bash
npm run ios
```

### En Web

```bash
npm run web
```

## 🏗️ Estructura del Proyecto

```
MiAppWithStack/
├── app/
│   ├── _layout.tsx           # Navegación principal
│   ├── modal.tsx             # Pantalla modal
│   ├── (tabs)/               # Navegación por pestañas
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── explore.tsx
│   └── stack/                # Stack Navigation
│       ├── _layout.tsx       # Configuración del stack
│       ├── home.tsx          # Pantalla Home
│       └── details.tsx       # Pantalla Details
├── components/               # Componentes reutilizables
├── constants/                # Constantes (tema, colores)
├── hooks/                    # Custom hooks
├── assets/                   # Imágenes y recursos
└── package.json
```

## 🧭 Navegación con Stack

### Stack Navigation

La aplicación utiliza **Stack Navigation** en la carpeta `app/stack`:

- **Home Screen** (`app/stack/home.tsx`): Pantalla principal
- **Details Screen** (`app/stack/details.tsx`): Pantalla de detalles

#### Navegar hacia adelante

```typescript
import { router } from "expo-router";

<Button
  title="Ir a Details"
  onPress={() => router.push("/stack/details")}
/>
```

#### Navegar hacia atrás

```typescript
import { router } from "expo-router";

<Button
  title="Volver"
  onPress={() => router.back()}
/>
```

## 📦 Dependencias Principales

- **expo-router**: Enrutamiento basado en archivos
- **react-navigation**: Navegación avanzada
- **react-native-reanimated**: Animaciones suaves
- **expo-symbols**: Iconos nativos
- **expo-image**: Carga optimizada de imágenes

## 🎨 Temas y Estilos

La aplicación soporta **modo claro y oscuro automáticamente**. Los colores se definen en:

```typescript
// constants/theme.ts
Colors.light  // Colores para modo claro
Colors.dark   // Colores para modo oscuro
```

## 🔧 Scripts Disponibles

```bash
npx expo start             # Inicia el servidor de desarrollo
npm run android            # Ejecutar en Android Emulator
npm run ios                # Ejecutar en iOS Simulator
npm run web                # Ejecutar en navegador web
npm run lint               # Ejecutar ESLint
npm run reset-project      # Resetear el proyecto a estado inicial
```

