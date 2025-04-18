// Main App Component
// This file integrates all components and manages the application state

// Define responses and code examples for different programming tasks
const RESPONSES = {
  // Web Development
  web: {
    frontend: {
      react: `Here's a React component that implements a responsive navigation bar with dropdown menus:

\`\`\`jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  
  const menuItems = [
    { 
      title: 'Products', 
      items: ['Web App', 'Mobile App', 'Desktop App', 'Enterprise Solutions'] 
    },
    { 
      title: 'Services', 
      items: ['Consulting', 'Development', 'Design', 'Support'] 
    },
    { 
      title: 'Resources', 
      items: ['Documentation', 'Tutorials', 'Blog', 'Community'] 
    },
    { 
      title: 'Company', 
      items: ['About', 'Careers', 'Contact', 'Press'] 
    }
  ];
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">CodeGenius</span>
          </a>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <a 
                className="nav-link" 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(index);
                }}
              >
                {item.title}
                <i className={activeDropdown === index ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} />
              </a>
              
              <ul className={activeDropdown === index ? 'dropdown-menu active' : 'dropdown-menu'}>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href="#">{subItem}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          
          <li className="nav-item">
            <a className="nav-link highlight" href="#">Get Started</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
\`\`\`

And here's the accompanying CSS:

\`\`\`css
.navbar {
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

.logo-text {
  color: #2563eb;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
  height: 80px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.nav-link {
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  font-size: 1rem;
  transition: all 0.3s ease;
  gap: 0.25rem;
}

.nav-link:hover {
  color: #2563eb;
}

.nav-link.highlight {
  background-color: #2563eb;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  height: auto;
}

.nav-link.highlight:hover {
  background-color: #1d4ed8;
  color: #fff;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  z-index: 1;
}

.dropdown-menu.active {
  display: block;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  color: #333;
  padding: 0.75rem 1rem;
  display: block;
  text-decoration: none;
  transition: all 0.2s ease;
}

.dropdown-menu a:hover {
  background-color: #f8fafc;
  color: #2563eb;
}

.menu-icon {
  display: none;
}

/* Mobile responsiveness */
@media screen and (max-width: 960px) {
  .menu-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #fff;
  }

  .nav-menu.active {
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    padding-top: 1rem;
  }

  .nav-item {
    height: auto;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;
    width: 100%;
    box-shadow: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding: 0;
  }

  .dropdown-menu.active {
    max-height: 500px;
  }
}
\`\`\`

This navigation component is responsive and will work well on both mobile and desktop devices. On mobile, it transforms into a hamburger menu with expandable dropdown sections.`,
      vue: `Here's a Vue.js form with built-in validation:

\`\`\`vue
<template>
  <div class="form-container">
    <h2>Contact Form</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group" :class="{ 'has-error': errors.name }">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          @blur="validateField('name')"
        />
        <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          @blur="validateField('email')"
        />
        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.message }">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          @blur="validateField('message')"
        ></textarea>
        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
      </div>
      
      <div class="form-group">
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Submit' }}
        </button>
      </div>
      
      <div class="form-success" v-if="formSubmitted">
        Thank you! Your message has been sent successfully.
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false,
      formSubmitted: false
    };
  },
  methods: {
    validateField(field) {
      this.errors[field] = '';
      
      switch (field) {
        case 'name':
          if (!this.form.name) {
            this.errors.name = 'Name is required';
          } else if (this.form.name.length < 2) {
            this.errors.name = 'Name must be at least 2 characters';
          }
          break;
          
        case 'email':
          if (!this.form.email) {
            this.errors.email = 'Email is required';
          } else if (!this.isValidEmail(this.form.email)) {
            this.errors.email = 'Please enter a valid email address';
          }
          break;
          
        case 'message':
          if (!this.form.message) {
            this.errors.message = 'Message is required';
          } else if (this.form.message.length < 10) {
            this.errors.message = 'Message must be at least 10 characters';
          }
          break;
      }
    },
    
    validateForm() {
      let isValid = true;
      
      // Validate all fields
      ['name', 'email', 'message'].forEach(field => {
        this.validateField(field);
        if (this.errors[field]) {
          isValid = false;
        }
      });
      
      return isValid;
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form after successful submission
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        this.formSubmitted = true;
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 1.5rem;
  color: #334155;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #334155;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.has-error input, .has-error textarea {
  border-color: #ef4444;
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  color: #ef4444;
  font-size: 0.875rem;
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #1d4ed8;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-success {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #dcfce7;
  color: #166534;
  border-radius: 4px;
  text-align: center;
}
</style>
\`\`\`

This form includes:
- Input validation for name, email, and message
- Real-time validation feedback
- Disabled state during form submission
- Success message after form is submitted
- Proper styling for form elements and error states`
    },
    backend: {
      express: `Here's a complete Express.js REST API with MongoDB integration:

\`\`\`javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

\`\`\`javascript
// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with hashed password
UserSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
\`\`\`

\`\`\`javascript
// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const userExists = await User.findOne({ email });
    
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Create user
    const user = await User.create({
      name,
      email,
      password
    });
    
    // Generate token
    const token = generateToken(user._id);
    
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }
    
    // Check if user exists
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check if password matches
    const isMatch = await user.comparePassword(password);
    
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    
    res.status(200).json({
      success: true,
      user
    });
  } catch (err) {
    next(err);
  }
};
\`\`\`

\`\`\`javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    return res.status(401).json({ error: 'Not authorized to access this route' });
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user from the token
    req.user = await User.findById(decoded.id).select('-password');
    
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Not authorized to access this route' });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: \`User role \${req.user.role} is not authorized to access this route\` });
    }
    next();
  };
};
\`\`\`

\`\`\`javascript
// routes/index.js
const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;
\`\`\`

\`\`\`javascript
// routes/authRoutes.js
const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
\`\`\`

This Express.js API includes:
- User registration and authentication with JWT
- Password hashing with bcrypt
- MongoDB integration with Mongoose
- Role-based authorization
- Proper error handling
- Route organization
- Environment variable configuration`
    }
  },
  
  // Mobile Development responses
  mobile: {
    reactNative: `Here's a React Native bottom tab navigator implementation:

\`\`\`jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

// Create navigators
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

// Home stack screens
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <Text style={styles.text}>Welcome to the app!</Text>
  </View>
);

const HomeDetailsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Details</Text>
    <Text style={styles.text}>More information about this item.</Text>
  </View>
);

// Profile stack screens
const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Profile Screen</Text>
    <Text style={styles.text}>User profile information goes here.</Text>
  </View>
);

const ProfileEditScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Edit Profile</Text>
    <Text style={styles.text}>Edit your profile details.</Text>
  </View>
);

// Explore stack screens
const ExploreScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Explore Screen</Text>
    <Text style={styles.text}>Discover new content here.</Text>
  </View>
);

// Notifications stack screens
const NotificationsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Notifications</Text>
    <Text style={styles.text}>Your notifications will appear here.</Text>
  </View>
);

// Stack navigators
const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="HomeDetails" component={HomeDetailsScreen} />
  </HomeStack.Navigator>
);

const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="EditProfile" component={ProfileEditScreen} />
  </ProfileStack.Navigator>
);

const ExploreStackNavigator = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen name="Explore" component={ExploreScreen} />
  </ExploreStack.Navigator>
);

const NotificationsStackNavigator = () => (
  <NotificationsStack.Navigator>
    <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} />
  </NotificationsStack.Navigator>
);

// Tab navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'ProfileTab') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'ExploreTab') {
          iconName = focused ? 'compass' : 'compass-outline';
        } else if (route.name === 'NotificationsTab') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#2563eb',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: {
        paddingBottom: 5,
        paddingTop: 5,
        height: 60
      }
    })}
  >
    <Tab.Screen 
      name="HomeTab" 
      component={HomeStackNavigator} 
      options={{ tabBarLabel: 'Home' }}
    />
    <Tab.Screen 
      name="ExploreTab" 
      component={ExploreStackNavigator} 
      options={{ tabBarLabel: 'Explore' }}
    />
    <Tab.Screen 
      name="NotificationsTab" 
      component={NotificationsStackNavigator} 
      options={{ tabBarLabel: 'Notifications' }}
    />
    <Tab.Screen 
      name="ProfileTab" 
      component={ProfileStackNavigator} 
      options={{ tabBarLabel: 'Profile' }}
    />
  </Tab.Navigator>
);

// Main app component
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f7fb',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#334155'
  },
  text: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center'
  }
});

export default App;
\`\`\`

To use this code, you'll need to install the required dependencies:

\`\`\`bash
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack @expo/vector-icons react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
\`\`\`

This example includes:
- Bottom tab navigation with icons
- Stack navigation for each tab
- Custom styling for tabs and screens
- Proper navigation structure for a complete app`
  },
  
  // Backend Development responses
  backend: {
    nodejs: `Here's a complete Node.js REST API with authentication, error handling, and database integration:

\`\`\`javascript
// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const { notFound } = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

\`\`\`javascript
// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [50, 'Name cannot be more than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
\`\`\`

\`\`\`javascript
// controllers/authController.js
const User = require('../models/User');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
  });

  sendTokenResponse(user, 201, res);
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Log user out / clear cookie
// @route   GET /api/auth/logout
// @access  Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
  });
};
\`\`\`

\`\`\`javascript
// middleware/auth.js
const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Get token from header
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    // Get token from cookie
    token = req.cookies.token;
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
\`\`\`

This robust Node.js API includes:
- User authentication with JWT
- Password encryption
- Role-based access control
- MongoDB integration
- Error handling middleware
- Complete route structure
- Express best practices`
  },
  
  // Data Science responses
  data: {
    python: `Here's a complete data analysis pipeline using pandas and matplotlib:

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix

# Set style for visualizations
sns.set(style="whitegrid")
plt.rcParams['figure.figsize'] = (12, 8)

# Load and explore the data
def load_and_explore_data(file_path):
    """
    Load data and perform initial exploration
    """
    print("Loading data...")
    df = pd.read_csv(file_path)
    
    print("\nDataset Info:")
    print(f"Shape: {df.shape}")
    print(f"Columns: {df.columns.tolist()}")
    
    print("\nFirst 5 rows:")
    print(df.head())
    
    print("\nData Types:")
    print(df.dtypes)
    
    print("\nMissing Values:")
    print(df.isnull().sum())
    
    print("\nSummary Statistics:")
    print(df.describe())
    
    return df

# Clean the data
def clean_data(df):
    """
    Clean and preprocess the data
    """
    print("\nCleaning data...")
    # Create a copy to avoid modifying the original
    clean_df = df.copy()
    
    # Drop duplicates
    initial_rows = len(clean_df)
    clean_df.drop_duplicates(inplace=True)
    print(f"Removed {initial_rows - len(clean_df)} duplicate rows")
    
    # Handle missing values
    # For numeric columns, fill with median
    numeric_cols = clean_df.select_dtypes(include=['number']).columns
    for col in numeric_cols:
        if clean_df[col].isnull().sum() > 0:
            median_value = clean_df[col].median()
            clean_df[col].fillna(median_value, inplace=True)
            print(f"Filled missing values in '{col}' with median: {median_value}")
    
    # For categorical columns, fill with mode
    cat_cols = clean_df.select_dtypes(include=['object']).columns
    for col in cat_cols:
        if clean_df[col].isnull().sum() > 0:
            mode_value = clean_df[col].mode()[0]
            clean_df[col].fillna(mode_value, inplace=True)
            print(f"Filled missing values in '{col}' with mode: {mode_value}")
    
    # Handle outliers using IQR method for numeric columns
    for col in numeric_cols:
        Q1 = clean_df[col].quantile(0.25)
        Q3 = clean_df[col].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR
        
        outliers = ((clean_df[col] < lower_bound) | (clean_df[col] > upper_bound)).sum()
        if outliers > 0:
            print(f"Found {outliers} outliers in '{col}'")
            # Cap the outliers instead of removing them
            clean_df[col] = clean_df[col].clip(lower=lower_bound, upper=upper_bound)
            print(f"Capped outliers in '{col}' to range: [{lower_bound}, {upper_bound}]")
    
    return clean_df

# Feature engineering
def engineer_features(df):
    """
    Create new features and transform existing ones
    """
    print("\nEngineering features...")
    df_new = df.copy()
    
    # Example: Create dummy variables for categorical columns
    cat_cols = df_new.select_dtypes(include=['object']).columns
    for col in cat_cols:
        print(f"Creating dummy variables for '{col}'")
        dummies = pd.get_dummies(df_new[col], prefix=col, drop_first=True)
        df_new = pd.concat([df_new, dummies], axis=1)
        df_new.drop(col, axis=1, inplace=True)
    
    # Example: Feature scaling for numeric columns
    numeric_cols = df_new.select_dtypes(include=['number']).columns
    if len(numeric_cols) > 0:
        print("Scaling numeric features...")
        scaler = StandardScaler()
        df_new[numeric_cols] = scaler.fit_transform(df_new[numeric_cols])
    
    # Example: Create interaction features
    if len(numeric_cols) >= 2:
        for i in range(len(numeric_cols) - 1):
            for j in range(i + 1, len(numeric_cols)):
                col1 = numeric_cols[i]
                col2 = numeric_cols[j]
                interaction_name = f"{col1}_x_{col2}"
                df_new[interaction_name] = df_new[col1] * df_new[col2]
                print(f"Created interaction feature: {interaction_name}")
    
    print(f"Final dataset shape: {df_new.shape}")
    return df_new

# Visualization functions
def visualize_data(df, target_col=None):
    """
    Create visualizations to understand the data
    """
    print("\nCreating visualizations...")
    
    # Distribution of numeric features
    numeric_cols = df.select_dtypes(include=['number']).columns
    if len(numeric_cols) > 0:
        plt.figure(figsize=(15, 10))
        for i, col in enumerate(numeric_cols[:9], 1):  # Limit to 9 cols for readability
            plt.subplot(3, 3, i)
            sns.histplot(df[col], kde=True)
            plt.title(f'Distribution of {col}')
            plt.tight_layout()
        plt.savefig('numeric_distributions.png')
        plt.close()
        print("Saved numeric distributions plot")
    
    # Correlation heatmap
    if len(numeric_cols) > 1:
        plt.figure(figsize=(12, 10))
        correlation = df[numeric_cols].corr()
        mask = np.triu(correlation)
        sns.heatmap(correlation, annot=True, cmap='coolwarm', fmt='.2f', mask=mask)
        plt.title('Feature Correlation Matrix')
        plt.tight_layout()
        plt.savefig('correlation_heatmap.png')
        plt.close()
        print("Saved correlation heatmap")
    
    # If target column is provided, create visualizations based on the target
    if target_col and target_col in df.columns:
        # Bar chart for categorical target
        if df[target_col].dtype == 'object' or df[target_col].nunique() < 10:
            plt.figure(figsize=(10, 6))
            sns.countplot(y=target_col, data=df)
            plt.title(f'Count of {target_col} classes')
            plt.tight_layout()
            plt.savefig('target_class_distribution.png')
            plt.close()
            print("Saved target class distribution plot")
            
            # Relationship between features and target (categorical)
            for col in numeric_cols[:3]:  # Limit to 3 features for demonstration
                plt.figure(figsize=(10, 6))
                sns.boxplot(x=target_col, y=col, data=df)
                plt.title(f'{col} by {target_col}')
                plt.tight_layout()
                plt.savefig(f'{col}_by_target.png')
                plt.close()
                print(f"Saved {col} by target plot")
        
        # Scatter plots for numeric target
        else:
            # Pairplot of key features with the target
            if len(numeric_cols) > 2:
                features_to_plot = list(numeric_cols[:4])  # Limit to 4 features
                if target_col not in features_to_plot:
                    features_to_plot.append(target_col)
                
                sns.pairplot(df[features_to_plot], hue=target_col if df[target_col].nunique() < 10 else None)
                plt.tight_layout()
                plt.savefig('feature_pairplot.png')
                plt.close()
                print("Saved feature pairplot")

# Model building and evaluation
def build_and_evaluate_model(df, target_col, is_classification=True):
    """
    Build and evaluate a machine learning model
    """
    print("\nBuilding and evaluating model...")
    
    # Prepare data for modeling
    if target_col not in df.columns:
        print(f"Target column '{target_col}' not found in the dataset")
        return
    
    X = df.drop(target_col, axis=1)
    y = df[target_col]
    
    # Split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    print(f"Training set size: {X_train.shape}")
    print(f"Test set size: {X_test.shape}")
    
    # For this example, we'll use a Random Forest model
    if is_classification:
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train, y_train)
        
        # Evaluate model
        y_pred = model.predict(X_test)
        print("\nClassification Report:")
        print(classification_report(y_test, y_pred))
        
        print("\nConfusion Matrix:")
        cm = confusion_matrix(y_test, y_pred)
        plt.figure(figsize=(8, 6))
        sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
        plt.xlabel('Predicted')
        plt.ylabel('Actual')
        plt.title('Confusion Matrix')
        plt.tight_layout()
        plt.savefig('confusion_matrix.png')
        plt.close()
        print("Saved confusion matrix plot")
        
        # Feature importance
        feature_importance = pd.DataFrame({
            'Feature': X.columns,
            'Importance': model.feature_importances_
        }).sort_values('Importance', ascending=False)
        
        plt.figure(figsize=(10, 8))
        sns.barplot(x='Importance', y='Feature', data=feature_importance.head(15))
        plt.title('Feature Importance')
        plt.tight_layout()
        plt.savefig('feature_importance.png')
        plt.close()
        print("Saved feature importance plot")
        
    else:
        # Regression modeling would go here
        pass
    
    return model

# Main function to run the entire pipeline
def run_analysis_pipeline(file_path, target_col=None, is_classification=True):
    """
    Run the complete data analysis pipeline
    """
    print("Starting data analysis pipeline...\n")
    
    # Step 1: Load and explore the data
    df = load_and_explore_data(file_path)
    
    # Step 2: Clean the data
    clean_df = clean_data(df)
    
    # Step 3: Engineer features
    engineered_df = engineer_features(clean_df)
    
    # Step 4: Visualize the data
    visualize_data(engineered_df, target_col)
    
    # Step 5: Build and evaluate model (if target column is provided)
    if target_col:
        model = build_and_evaluate_model(engineered_df, target_col, is_classification)
        return engineered_df, model
    
    return engineered_df, None

# Example usage
if __name__ == "__main__":
    # Replace with your actual file path and target column
    file_path = "your_dataset.csv"
    target_column = "target"
    
    # Run the analysis pipeline
    processed_data, model = run_analysis_pipeline(file_path, target_column, is_classification=True)
    
    print("\nAnalysis pipeline completed successfully!")
\`\`\`

This comprehensive data analysis pipeline includes:
- Data loading and exploration
- Data cleaning (handling missing values and outliers)
- Feature engineering
- Data visualization
- Model building and evaluation
- A complete workflow that can be adapted to different datasets`
  },
  
  // Game Development responses
  game: {
    unity: `Here's a complete Unity player controller with movement, jumping, and animation:

\`\`\`csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float runSpeed = 8f;
    [SerializeField] private float jumpForce = 10f;
    [SerializeField] private float gravityMultiplier = 2.5f;

    [Header("Ground Check")]
    [SerializeField] private Transform groundCheck;
    [SerializeField] private float groundCheckRadius = 0.2f;
    [SerializeField] private LayerMask groundLayer;

    [Header("Rotation Settings")]
    [SerializeField] private float rotationSpeed = 10f;

    [Header("Animation")]
    [SerializeField] private Animator animator;

    // Component references
    private CharacterController controller;
    private Camera mainCamera;

    // Movement variables
    private Vector3 moveDirection;
    private float verticalVelocity;
    private bool isGrounded;
    private bool isRunning;

    // Animation parameter hashes
    private int animSpeedHash;
    private int animGroundedHash;
    private int animJumpHash;

    private void Awake()
    {
        // Get component references
        controller = GetComponent<CharacterController>();
        mainCamera = Camera.main;

        // Cache animation parameter hashes for better performance
        animSpeedHash = Animator.StringToHash("Speed");
        animGroundedHash = Animator.StringToHash("Grounded");
        animJumpHash = Animator.StringToHash("Jump");

        // Lock cursor for FPS control
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

    private void Update()
    {
        CheckGrounded();
        HandleInput();
        HandleGravity();
        HandleMovement();
        HandleRotation();
        UpdateAnimations();
    }

    private void CheckGrounded()
    {
        // Sphere cast to check if the player is grounded
        isGrounded = Physics.CheckSphere(groundCheck.position, groundCheckRadius, groundLayer);

        // Update animator
        if (animator)
        {
            animator.SetBool(animGroundedHash, isGrounded);
        }
    }

    private void HandleInput()
    {
        // Get input for movement
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");

        // Calculate move direction relative to camera
        Vector3 forward = mainCamera.transform.forward;
        Vector3 right = mainCamera.transform.right;

        forward.y = 0f;
        right.y = 0f;
        forward.Normalize();
        right.Normalize();

        moveDirection = (forward * vertical + right * horizontal).normalized;

        // Handle running
        isRunning = Input.GetKey(KeyCode.LeftShift);

        // Handle jumping
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            Jump();
        }
    }

    private void HandleGravity()
    {
        // Apply gravity
        if (isGrounded && verticalVelocity < 0)
        {
            // Small negative value to keep the player grounded
            verticalVelocity = -2f;
        }
        else
        {
            // Apply gravity with multiplier for better feel
            verticalVelocity += Physics.gravity.y * gravityMultiplier * Time.deltaTime;
        }
    }

    private void Jump()
    {
        verticalVelocity = jumpForce;

        // Trigger jump animation
        if (animator)
        {
            animator.SetTrigger(animJumpHash);
        }
    }

    private void HandleMovement()
    {
        // Calculate movement speed
        float currentSpeed = isRunning ? runSpeed : moveSpeed;

        // Apply movement and gravity
        Vector3 movement = moveDirection * currentSpeed;
        movement.y = verticalVelocity;

        // Move the character controller
        controller.Move(movement * Time.deltaTime);
    }

    private void HandleRotation()
    {
        // Rotate the player to face the movement direction
        if (moveDirection.magnitude > 0.1f)
        {
            Quaternion targetRotation = Quaternion.LookRotation(moveDirection);
            transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, rotationSpeed * Time.deltaTime);
        }
    }

    private void UpdateAnimations()
    {
        if (animator)
        {
            // Calculate animation speed parameter
            float animSpeed = 0f;
            if (moveDirection.magnitude > 0.1f)
            {
                animSpeed = isRunning ? 1f : 0.5f;
            }

            // Update animator
            animator.SetFloat(animSpeedHash, animSpeed, 0.1f, Time.deltaTime);
        }
    }

    private void OnDrawGizmosSelected()
    {
        // Draw ground check sphere for easier debugging
        if (groundCheck != null)
        {
            Gizmos.color = Color.green;
            Gizmos.DrawWireSphere(groundCheck.position, groundCheckRadius);
        }
    }
}
\`\`\`

To use this player controller:

1. Add the script to your player character in Unity
2. Create an empty GameObject as a child of your player and position it at the character's feet
3. Assign this GameObject to the "Ground Check" field
4. Create a layer called "Ground" and assign it to your terrain or floor objects
5. Set the "Ground Layer" field to the Ground layer
6. If you have an Animator component, assign it to the "Animator" field

This controller includes:
- Smooth movement with adjustable speeds
- Running capability when holding shift
- Jumping with proper gravity
- Ground checking
- Camera-relative movement
- Character rotation to face movement direction
- Animation parameter control
- Input handling
- Debug visualization with gizmos`
  }
};

// Main App component that integrates all the other components
function App() {
  // State for managing application
  const [messages, setMessages] = React.useState([
    { 
      role: 'bot', 
      content: "Hi there! I'm CodeGenius, your AI coding assistant. I can help you with coding projects across different programming languages and frameworks. What would you like to work on today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [activeProjectType, setActiveProjectType] = React.useState('web');
  const [activeQueryTag, setActiveQueryTag] = React.useState('all');
  
  // Initialize Lucide icons
  React.useEffect(() => {
    createIcons();
  }, []);
  
  // Copy code to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Failed to copy text: ', err);
      // Fallback for mobile
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback: Couldn\'t copy text: ', err);
      }
      document.body.removeChild(textArea);
    });
  };
  
  // Generate response based on input
  const generateResponse = (query) => {
    setIsTyping(true);
    
    // Determine the intent and language from the query
    const intent = getQueryIntent(query, activeProjectType, activeQueryTag);
    
    // Simulate response delay
    setTimeout(() => {
      let botResponse = "";
      
      // Get appropriate response based on project type and intent
      if (activeProjectType === 'web') {
        if (query.toLowerCase().includes('react') || intent.includes('react')) {
          botResponse = RESPONSES.web.frontend.react;
        } else if (query.toLowerCase().includes('vue') || intent.includes('vue')) {
          botResponse = RESPONSES.web.frontend.vue;
        } else if (query.toLowerCase().includes('api') || query.toLowerCase().includes('backend') || intent.includes('api')) {
          botResponse = RESPONSES.web.backend.express;
        } else {
          botResponse = RESPONSES.web.frontend.react;
        }
      } else if (activeProjectType === 'mobile') {
        botResponse = RESPONSES.mobile.reactNative;
      } else if (activeProjectType === 'backend') {
        botResponse = RESPONSES.backend.nodejs;
      } else if (activeProjectType === 'data') {
        botResponse = RESPONSES.data.python;
      } else if (activeProjectType === 'game') {
        botResponse = RESPONSES.game.unity;
      } else {
        // Default response if no specific response is available
        botResponse = `I'd be happy to help you with your ${PROJECT_TYPES.find(p => p.id === activeProjectType)?.name || 'project'}. Could you specify what kind of assistance you need with your code?`;
      }
      
      setMessages([...messages, 
        { role: 'user', content: query, timestamp: new Date() },
        { role: 'bot', content: botResponse, timestamp: new Date() }
      ]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Helper function to determine query intent
  const getQueryIntent = (query, projectType, queryTag) => {
    query = query.toLowerCase();
    let intents = [];
    
    // Check for language/framework mentions
    if (query.includes('react')) intents.push('react');
    if (query.includes('vue')) intents.push('vue');
    if (query.includes('angular')) intents.push('angular');
    if (query.includes('node') || query.includes('express')) intents.push('node');
    if (query.includes('python') || query.includes('django') || query.includes('flask')) intents.push('python');
    if (query.includes('java')) intents.push('java');
    if (query.includes('c#') || query.includes('unity')) intents.push('csharp');
    
    // Check for task type
    if (query.includes('create') || query.includes('generate') || query.includes('build')) {
      intents.push('generate');
    } else if (query.includes('explain') || query.includes('how') || query.includes('what')) {
      intents.push('explain');
    } else if (query.includes('debug') || query.includes('fix') || query.includes('problem')) {
      intents.push('debug');
    } else if (query.includes('optimize') || query.includes('improve')) {
      intents.push('optimize');
    }
    
    // Add project type and query tag as potential intents
    intents.push(projectType);
    if (queryTag !== 'all') intents.push(queryTag);
    
    return intents;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    generateResponse(input);
    setInput('');
  };
  
  return (
    <div className="app-container">
      <Header 
        activeProjectType={activeProjectType}
        setActiveProjectType={setActiveProjectType}
      />
      
      <div className="main-content">
        <div className="chat-panel">
          <MessagesContainer 
            messages={messages}
            copyToClipboard={copyToClipboard}
            isTyping={isTyping}
          />
          
          <InputArea 
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isTyping={isTyping}
            activeProjectType={activeProjectType}
            activeQueryTag={activeQueryTag}
            setActiveQueryTag={setActiveQueryTag}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
