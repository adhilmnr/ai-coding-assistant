// Code Components
// This file contains code-related utilities and response generators

// Language metadata for better code generation
const LANGUAGE_METADATA = {
  // Web Development
  JavaScript: {
    fileExtension: '.js',
    template: '// JavaScript code\n',
    frameworks: ['React', 'Vue', 'Angular', 'Express', 'Node.js'],
    common: ['DOM manipulation', 'API calls', 'Event handling']
  },
  TypeScript: {
    fileExtension: '.ts',
    template: '// TypeScript code\n',
    frameworks: ['React', 'Angular', 'Next.js', 'NestJS'],
    common: ['Type definitions', 'Interfaces', 'Classes']
  },
  HTML: {
    fileExtension: '.html',
    template: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>',
    common: ['Structure', 'Semantic elements', 'Forms']
  },
  CSS: {
    fileExtension: '.css',
    template: '/* CSS styles */\n',
    frameworks: ['Tailwind', 'Bootstrap', 'Sass', 'Less'],
    common: ['Layout', 'Responsiveness', 'Animations']
  },
  // Mobile Development
  'React Native': {
    fileExtension: '.jsx',
    template: 'import React from \'react\';\nimport { View, Text } from \'react-native\';\n\nfunction MyComponent() {\n  return (\n    <View>\n      <Text>Hello World</Text>\n    </View>\n  );\n}\n\nexport default MyComponent;',
    common: ['Components', 'Navigation', 'Platform-specific code']
  },
  Flutter: {
    fileExtension: '.dart',
    template: 'import \'package:flutter/material.dart\';\n\nclass MyWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Container();\n  }\n}',
    common: ['Widgets', 'State management', 'Animations']
  },
  Swift: {
    fileExtension: '.swift',
    template: 'import UIKit\n\nclass ViewController: UIViewController {\n\n  override func viewDidLoad() {\n    super.viewDidLoad()\n  }\n}',
    common: ['UIKit', 'SwiftUI', 'Delegates']
  },
  Kotlin: {
    fileExtension: '.kt',
    template: 'package com.example.myapp\n\nimport android.os.Bundle\nimport androidx.appcompat.app.AppCompatActivity\n\nclass MainActivity : AppCompatActivity() {\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n  }\n}',
    common: ['Activities', 'Fragments', 'Coroutines']
  },
  // Backend Development
  'Node.js': {
    fileExtension: '.js',
    template: 'const express = require(\'express\');\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\napp.listen(PORT, () => {\n  console.log(`Server running on port ${PORT}`);\n});',
    frameworks: ['Express', 'Koa', 'Nest.js'],
    common: ['API routes', 'Authentication', 'Database integration']
  },
  Python: {
    fileExtension: '.py',
    template: '# Python code\n',
    frameworks: ['Django', 'Flask', 'FastAPI', 'TensorFlow', 'PyTorch'],
    common: ['Data processing', 'Web scraping', 'API integration']
  },
  Java: {
    fileExtension: '.java',
    template: 'public class Main {\n  public static void main(String[] args) {\n    \n  }\n}',
    frameworks: ['Spring Boot', 'Hibernate', 'Android'],
    common: ['Object-oriented design', 'Concurrency', 'Enterprise applications']
  },
  'C#': {
    fileExtension: '.cs',
    template: 'using System;\n\nnamespace MyApp {\n  class Program {\n    static void Main(string[] args) {\n      \n    }\n  }\n}',
    frameworks: ['.NET Core', 'ASP.NET', 'Entity Framework'],
    common: ['LINQ', 'Async/await', 'Windows apps']
  },
  Go: {
    fileExtension: '.go',
    template: 'package main\n\nimport "fmt"\n\nfunc main() {\n  \n}',
    common: ['Concurrency', 'Microservices', 'Web servers']
  },
  // Data Science
  R: {
    fileExtension: '.R',
    template: '# R script\n',
    common: ['Statistical analysis', 'Data visualization', 'Machine learning']
  },
  SQL: {
    fileExtension: '.sql',
    template: '-- SQL query\n',
    common: ['Queries', 'Database design', 'Performance optimization']
  },
  // Game Development
  'Unity/C#': {
    fileExtension: '.cs',
    template: 'using UnityEngine;\n\npublic class PlayerController : MonoBehaviour {\n  void Start() {\n    \n  }\n\n  void Update() {\n    \n  }\n}',
    common: ['Game mechanics', 'Physics', 'Animation']
  },
  'Unreal/C++': {
    fileExtension: '.cpp',
    template: '#include "MyClass.h"\n\nAMyClass::AMyClass() {\n  \n}\n\nvoid AMyClass::BeginPlay() {\n  Super::BeginPlay();\n}',
    common: ['Blueprints', 'Character controllers', 'Game AI']
  },
  // DevOps
  Docker: {
    fileExtension: 'Dockerfile',
    template: 'FROM node:14\nWORKDIR /app\nCOPY . .\nRUN npm install\nEXPOSE 3000\nCMD ["npm", "start"]',
    common: ['Containerization', 'Multi-stage builds', 'Docker Compose']
  },
  Kubernetes: {
    fileExtension: '.yaml',
    template: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n      - name: my-app\n        image: my-app:latest',
    common: ['Pod management', 'Service discovery', 'Helm charts']
  },
  Terraform: {
    fileExtension: '.tf',
    template: 'provider "aws" {\n  region = "us-west-2"\n}\n\nresource "aws_instance" "example" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n}',
    common: ['Infrastructure as code', 'Cloud providers', 'State management']
  },
  // Blockchain
  Solidity: {
    fileExtension: '.sol',
    template: 'pragma solidity ^0.8.0;\n\ncontract MyContract {\n  \n}',
    common: ['Smart contracts', 'Ethereum', 'Token standards']
  }
};

// Code analysis function - Analyzes code and provides suggestions
function analyzeCode(code, language) {
  let suggestions = [];
  
  // Common issues across languages
  if (code.includes('TODO') || code.includes('FIXME')) {
    suggestions.push({
      type: 'info',
      message: 'There are TODO comments in the code that should be addressed.'
    });
  }
  
  // Check for common issues in specific languages
  switch (language.toLowerCase()) {
    case 'javascript':
    case 'typescript':
      // Check for console.log statements
      if (/console\.log\(/.test(code)) {
        suggestions.push({
          type: 'warning',
          message: 'Remove console.log statements before production deployment.'
        });
      }
      
      // Check for var usage
      if (/\bvar\b/.test(code)) {
        suggestions.push({
          type: 'suggestion',
          message: 'Consider using const or let instead of var for better scoping.'
        });
      }
      
      // Check for potential memory leaks in event listeners
      if (/addEventListener\(/.test(code) && !/removeEventListener\(/.test(code)) {
        suggestions.push({
          type: 'warning',
          message: 'Event listeners are added but not removed, which could cause memory leaks.'
        });
      }
      break;
      
    case 'python':
      // Check for print statements
      if (/print\(/.test(code)) {
        suggestions.push({
          type: 'info',
          message: 'Consider using a logging library instead of print statements.'
        });
      }
      
      // Check for bare except clauses
      if (/except:/.test(code)) {
        suggestions.push({
          type: 'warning',
          message: 'Avoid bare except clauses, specify the exceptions you want to catch.'
        });
      }
      break;
      
    case 'java':
    case 'c#':
      // Check for empty catch blocks
      if (/catch\s*\([^)]+\)\s*\{\s*\}/.test(code)) {
        suggestions.push({
          type: 'warning',
          message: 'Empty catch blocks suppress exceptions without handling them.'
        });
      }
      break;
      
    case 'css':
      // Check for !important
      if (/!important/.test(code)) {
        suggestions.push({
          type: 'suggestion',
          message: 'Avoid using !important as it makes styles harder to override.'
        });
      }
      break;
  }
  
  return suggestions;
}

// Code improvement function - Suggests improvements for code
function improveCode(code, language) {
  let improved = code;
  let improvements = [];
  
  // Language-specific improvements
  switch (language.toLowerCase()) {
    case 'javascript':
    case 'typescript':
      // Replace var with const where possible
      if (/\bvar\b/.test(code)) {
        improved = improved.replace(/var\s+([a-zA-Z0-9_$]+)(\s*=\s*[^;]+);/g, 'const $1$2;');
        improvements.push("Replaced 'var' with 'const' for better variable scoping");
      }
      
      // Add semicolons if missing
      if (/}\n(let|const|var|function|class)/.test(code)) {
        improved = improved.replace(/}(\s*\n\s*)(let|const|var|function|class)/g, '};\n$2');
        improvements.push("Added missing semicolons");
      }
      break;
      
    case 'python':
      // Add docstrings if missing
      if (/def\s+\w+\([^)]*\):\s*\n\s+[^\s#]/.test(code)) {
        improved = improved.replace(
          /(def\s+\w+\([^)]*\):\s*\n)(\s+[^\s#])/g, 
          '$1$2    """\n    Description of function\n    """\n$2'
        );
        improvements.push("Added docstring templates to functions");
      }
      break;
      
    case 'css':
      // Replace px with rem for better accessibility
      if (/\d+px/.test(code)) {
        improved = improved.replace(/(\d+)px/g, function(match, p1) {
          return (parseInt(p1) / 16) + 'rem';
        });
        improvements.push("Converted px units to rem for better accessibility");
      }
      break;
  }
  
  return {
    improvedCode: improved,
    improvements
  };
}

// Code generator function - Generates code based on query and language
function generateCode(query, language, projectType) {
  // Detect intent from query
  const intent = detectIntent(query);
  
  // Get language metadata
  const langData = LANGUAGE_METADATA[language] || {
    fileExtension: '.txt',
    template: '',
    common: []
  };
  
  // Generate appropriate code based on intent
  let generatedCode = '';
  
  switch (intent) {
    case 'component':
      if (language === 'React' || language === 'JavaScript' || language === 'TypeScript') {
        generatedCode = generateReactComponent(query);
      } else if (language === 'Vue') {
        generatedCode = generateVueComponent(query);
      } else if (language === 'Angular') {
        generatedCode = generateAngularComponent(query);
      } else if (language === 'Flutter') {
        generatedCode = generateFlutterWidget(query);
      } else if (language === 'Swift') {
        generatedCode = generateSwiftUIView(query);
      }
      break;
      
    case 'api':
      if (language === 'Node.js' || language === 'JavaScript') {
        generatedCode = generateNodeAPI(query);
      } else if (language === 'Python') {
        generatedCode = generatePythonAPI(query);
      } else if (language === 'Java') {
        generatedCode = generateJavaAPI(query);
      } else if (language === 'Go') {
        generatedCode = generateGoAPI(query);
      }
      break;
      
    case 'database':
      if (language === 'SQL') {
        generatedCode = generateSQLQuery(query);
      } else if (language === 'MongoDB' || language === 'JavaScript') {
        generatedCode = generateMongoDBQuery(query);
      }
      break;
      
    default:
      // Generate a basic template if no specific intent is detected
      generatedCode = langData.template || '// Generated code\n';
  }
  
  return generatedCode;
}

// Helper function to detect intent from query
function detectIntent(query) {
  query = query.toLowerCase();
  
  if (query.includes('component') || query.includes('ui') || query.includes('interface')) {
    return 'component';
  } else if (query.includes('api') || query.includes('endpoint') || query.includes('route')) {
    return 'api';
  } else if (query.includes('database') || query.includes('query') || query.includes('sql')) {
    return 'database';
  } else if (query.includes('function') || query.includes('method')) {
    return 'function';
  } else if (query.includes('class') || query.includes('object')) {
    return 'class';
  } else {
    return 'general';
  }
}

// Component generators
function generateReactComponent(query) {
  return `import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Fetch data or perform side effects here
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="my-component">
      <h2>My Component</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;`;
}

function generateVueComponent(query) {
  return `<template>
  <div class="my-component">
    <h2>My Component</h2>
    
    <p v-if="loading">Loading...</p>
    
    <ul v-else>
      <li v-for="item in data" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      data: [],
      loading: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        this.data = result;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.my-component {
  padding: 1rem;
}
</style>`;
}

function generateAngularComponent(query) {
  return `import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-my-component',
  template: \`
    <div class="my-component">
      <h2>My Component</h2>
      
      <p *ngIf="loading">Loading...</p>
      
      <ul *ngIf="!loading">
        <li *ngFor="let item of data">
          {{ item.name }}
        </li>
      </ul>
    </div>
  \`,
  styles: [\`
    .my-component {
      padding: 1rem;
    }
  \`]
})
export class MyComponent implements OnInit {
  data: Item[] = [];
  loading = false;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData(): void {
    this.loading = true;
    this.http.get<Item[]>('https://api.example.com/data')
      .subscribe({
        next: (result) => {
          this.data = result;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          this.loading = false;
        }
      });
  }
}`;
}

function generateFlutterWidget(query) {
  return `import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class MyWidget extends StatefulWidget {
  const MyWidget({Key? key}) : super(key: key);

  @override
  _MyWidgetState createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  List<dynamic> data = [];
  bool isLoading = false;

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    setState(() {
      isLoading = true;
    });
    
    try {
      final response = await http.get(Uri.parse('https://api.example.com/data'));
      
      if (response.statusCode == 200) {
        setState(() {
          data = jsonDecode(response.body);
          isLoading = false;
        });
      } else {
        throw Exception('Failed to load data');
      }
    } catch (e) {
      print('Error fetching data: $e');
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'My Widget',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 16),
          isLoading
              ? const Center(child: CircularProgressIndicator())
              : Expanded(
                  child: ListView.builder(
                    itemCount: data.length,
                    itemBuilder: (context, index) {
                      final item = data[index];
                      return ListTile(
                        title: Text(item['name']),
                      );
                    },
                  ),
                ),
        ],
      ),
    );
  }
}`;
}

function generateSwiftUIView(query) {
  return `import SwiftUI

struct Item: Codable, Identifiable {
    let id: Int
    let name: String
}

class DataFetcher: ObservableObject {
    @Published var items = [Item]()
    @Published var isLoading = false
    
    func fetchData() {
        isLoading = true
        
        guard let url = URL(string: "https://api.example.com/data") else {
            return
        }
        
        URLSession.shared.dataTask(with: url) { data, response, error in
            DispatchQueue.main.async {
                self.isLoading = false
                
                if let data = data {
                    do {
                        let decodedData = try JSONDecoder().decode([Item].self, from: data)
                        self.items = decodedData
                    } catch {
                        print("Error decoding data: \(error)")
                    }
                }
            }
        }.resume()
    }
}

struct MyView: View {
    @StateObject private var dataFetcher = DataFetcher()
    
    var body: some View {
        VStack(alignment: .leading) {
            Text("My View")
                .font(.title)
                .padding(.bottom)
            
            if dataFetcher.isLoading {
                ProgressView()
                    .frame(maxWidth: .infinity, alignment: .center)
            } else {
                List(dataFetcher.items) { item in
                    Text(item.name)
                }
            }
        }
        .padding()
        .onAppear {
            dataFetcher.fetchData()
        }
    }
}`;
}

// API generators
function generateNodeAPI(query) {
  return `const express = require('express');
const router = express.Router();

/**
 * @route   GET /api/items
 * @desc    Get all items
 * @access  Public
 */
router.get('/items', async (req, res) => {
  try {
    // For example purposes - replace with actual database query
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   GET /api/items/:id
 * @desc    Get item by ID
 * @access  Public
 */
router.get('/items/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // For example purposes - replace with actual database query
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    
    const item = items.find(item => item.id === id);
    
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   POST /api/items
 * @desc    Create a new item
 * @access  Private
 */
router.post('/items', async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ msg: 'Name is required' });
    }
    
    // For example purposes - replace with actual database operation
    const newItem = {
      id: 3, // In a real app, this would be generated by the database
      name
    };
    
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   PUT /api/items/:id
 * @desc    Update an item
 * @access  Private
 */
router.put('/items/:id', async (req, res) => {
  try {
    const { name } = req.body;
    const id = parseInt(req.params.id);
    
    if (!name) {
      return res.status(400).json({ msg: 'Name is required' });
    }
    
    // For example purposes - replace with actual database operation
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    
    const item = items.find(item => item.id === id);
    
    if (!item) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    
    // Update the item
    item.name = name;
    
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/**
 * @route   DELETE /api/items/:id
 * @desc    Delete an item
 * @access  Private
 */
router.delete('/items/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // For example purposes - replace with actual database operation
    const items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
    
    const itemIndex = items.findIndex(item => item.id === id);
    
    if (itemIndex === -1) {
      return res.status(404).json({ msg: 'Item not found' });
    }
    
    // Remove the item
    items.splice(itemIndex, 1);
    
    res.json({ msg: 'Item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;`;
}

function generatePythonAPI(query) {
  return `from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data - replace with database in production
items = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"}
]

@app.route('/api/items', methods=['GET'])
def get_items():
    """Get all items"""
    return jsonify(items)

@app.route('/api/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    """Get item by ID"""
    item = next((item for item in items if item['id'] == item_id), None)
    
    if item is None:
        return jsonify({"error": "Item not found"}), 404
    
    return jsonify(item)

@app.route('/api/items', methods=['POST'])
def create_item():
    """Create a new item"""
    if not request.json or 'name' not in request.json:
        return jsonify({"error": "Name is required"}), 400
    
    # In a real app, ID would be generated by the database
    new_id = max(item['id'] for item in items) + 1
    
    new_item = {
        "id": new_id,
        "name": request.json['name']
    }
    
    items.append(new_item)
    return jsonify(new_item), 201

@app.route('/api/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    """Update an existing item"""
    if not request.json or 'name' not in request.json:
        return jsonify({"error": "Name is required"}), 400
    
    item = next((item for item in items if item['id'] == item_id), None)
    
    if item is None:
        return jsonify({"error": "Item not found"}), 404
    
    item['name'] = request.json['name']
    return jsonify(item)

@app.route('/api/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    """Delete an item"""
    global items
    initial_count = len(items)
    
    items = [item for item in items if item['id'] != item_id]
    
    if len(items) == initial_count:
        return jsonify({"error": "Item not found"}), 404
    
    return jsonify({"message": "Item deleted"})

if __name__ == '__main__':
    app.run(debug=True)`;
}

function generateJavaAPI(query) {
  return `package com.example.api.controller;

import com.example.api.model.Item;
import com.example.api.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.findAll();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") Long id) {
        Optional<Item> itemData = itemService.findById(id);
        
        return itemData.map(item -> new ResponseEntity<>(item, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        try {
            Item savedItem = itemService.save(item);
            return new ResponseEntity<>(savedItem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable("id") Long id, @RequestBody Item item) {
        Optional<Item> itemData = itemService.findById(id);
        
        if (itemData.isPresent()) {
            Item updatedItem = itemData.get();
            updatedItem.setName(item.getName());
            return new ResponseEntity<>(itemService.save(updatedItem), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable("id") Long id) {
        try {
            itemService.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

// Model class (would be in a separate file)
package com.example.api.model;

import javax.persistence.*;

@Entity
@Table(name = "items")
public class Item {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    // Constructors
    public Item() {
    }
    
    public Item(String name) {
        this.name = name;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}`;
}

function generateGoAPI(query) {
  return `package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/gorilla/mux"
)

// Item represents a simple item structure
type Item struct {
	ID   int    \`json:"id"\`
	Name string \`json:"name"\`
}

// DB is a mock database
var items = []Item{
	{ID: 1, Name: "Item 1"},
	{ID: 2, Name: "Item 2"},
}

func main() {
	r := mux.NewRouter()

	// Define API routes
	r.HandleFunc("/api/items", getItems).Methods("GET")
	r.HandleFunc("/api/items/{id}", getItem).Methods("GET")
	r.HandleFunc("/api/items", createItem).Methods("POST")
	r.HandleFunc("/api/items/{id}", updateItem).Methods("PUT")
	r.HandleFunc("/api/items/{id}", deleteItem).Methods("DELETE")

	// Start server
	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}

// getItems returns all items
func getItems(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(items)
}

// getItem returns a specific item by ID
func getItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	// Get ID from URL
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid ID format"})
		return
	}
	
	// Find item
	for _, item := range items {
		if item.ID == id {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	
	// Item not found
	w.WriteHeader(http.StatusNotFound)
	json.NewEncoder(w).Encode(map[string]string{"error": "Item not found"})
}

// createItem adds a new item
func createItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	var newItem Item
	err := json.NewDecoder(r.Body).Decode(&newItem)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid request body"})
		return
	}
	
	// Validate input
	if newItem.Name == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Name is required"})
		return
	}
	
	// Generate ID (in a real app, this would be handled by the database)
	maxID := 0
	for _, item := range items {
		if item.ID > maxID {
			maxID = item.ID
		}
	}
	newItem.ID = maxID + 1
	
	// Add to "database"
	items = append(items, newItem)
	
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newItem)
}

// updateItem updates an existing item
func updateItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	// Get ID from URL
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid ID format"})
		return
	}
	
	// Parse input
	var updatedItem Item
	err = json.NewDecoder(r.Body).Decode(&updatedItem)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid request body"})
		return
	}
	
	// Validate input
	if updatedItem.Name == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Name is required"})
		return
	}
	
	// Update in "database"
	found := false
	for i := range items {
		if items[i].ID == id {
			items[i].Name = updatedItem.Name
			found = true
			json.NewEncoder(w).Encode(items[i])
			break
		}
	}
	
	if !found {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(map[string]string{"error": "Item not found"})
	}
}

// deleteItem removes an item
func deleteItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	// Get ID from URL
	params := mux.Vars(r)
	id, err := strconv.Atoi(params["id"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"error": "Invalid ID format"})
		return
	}
	
	// Remove from "database"
	found := false
	for i := range items {
		if items[i].ID == id {
			items = append(items[:i], items[i+1:]...)
			found = true
			break
		}
	}
	
	if found {
		json.NewEncoder(w).Encode(map[string]string{"message": "Item deleted"})
	} else {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(map[string]string{"error": "Item not found"})
	}
}`;
}

// Database query generators
function generateSQLQuery(query) {
  return `-- Create table
CREATE TABLE items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO items (name, description) VALUES
  ('Item 1', 'Description for item 1'),
  ('Item 2', 'Description for item 2');

-- Select all items
SELECT * FROM items;

-- Select item by ID
SELECT * FROM items WHERE id = 1;

-- Update item
UPDATE items SET name = 'Updated Item', description = 'New description' WHERE id = 1;

-- Delete item
DELETE FROM items WHERE id = 2;

-- More complex query with JOIN
SELECT i.*, c.name as category_name
FROM items i
JOIN categories c ON i.category_id = c.id
WHERE i.created_at > '2023-01-01'
ORDER BY i.name ASC
LIMIT 10;`;
}

function generateMongoDBQuery(query) {
  return `// Create collection (if it doesn't exist)
db.createCollection("items");

// Insert documents
db.items.insertMany([
  { 
    name: "Item 1", 
    description: "Description for item 1",
    tags: ["tag1", "tag2"],
    createdAt: new Date()
  },
  {
    name: "Item 2",
    description: "Description for item 2",
    tags: ["tag2", "tag3"],
    createdAt: new Date()
  }
]);

// Find all items
db.items.find();

// Find item by criteria
db.items.find({ name: "Item 1" });

// Find with projection (only return specific fields)
db.items.find(
  { tags: "tag2" },
  { name: 1, description: 1, _id: 0 }
);

// Update a document
db.items.updateOne(
  { name: "Item 1" },
  { $set: { description: "Updated description", updatedAt: new Date() } }
);

// Delete a document
db.items.deleteOne({ name: "Item 2" });

// Aggregation pipeline
db.items.aggregate([
  { $match: { tags: "tag2" } },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

// Create an index
db.items.createIndex({ name: 1 });

// Create a compound index
db.items.createIndex({ tags: 1, createdAt: -1 });`;
}
