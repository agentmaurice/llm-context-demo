# LLM Context Demo

Une application web éducative interactive démontrant comment le contexte affecte les réponses des Large Language Models (LLM). Cet outil aide les développeurs et passionnés d'IA à comprendre le rôle crucial du contexte dans les interactions avec les LLM.

## 🌐 Démo en ligne

Visitez l'application : [https://agentmaurice.github.io/llm-context-demo/](https://agentmaurice.github.io/llm-context-demo/)

![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/agentmaurice/llm-context-demo)

## 🎯 Objectif

Cette application offre une expérience pratique avec différents concepts LLM :
- **Gestion du contexte** : Observez comment différents contextes influencent les réponses
- **Prompts système** : Apprenez à façonner le comportement du modèle
- **Few-shot learning** : Comprenez l'apprentissage par exemples
- **Ajustement des paramètres** : Expérimentez avec température et limites de tokens
- **Injection de prompt** : Testez les considérations de sécurité
- **RAG** : Découvrez la génération augmentée par récupération
- **MCP** : Explorez le Model Context Protocol pour les appels d'outils

## ✨ Fonctionnalités

### 12 Étapes éducatives progressives

0. **Anatomie d'un appel API** : Structure complète d'une requête HTTP vers un LLM
1. **Sans contexte** : Requêtes de base sans contexte
2. **Rôle système** : Ajout d'un message système pour définir le comportement
3. **Historique de conversation** : Construction basée sur les interactions précédentes
4. **Few-shot learning** : Apprentissage du format de sortie par exemples
5. **Instructions de formatage** : Contrôle précis de la structure de réponse
6. **Conflits de contexte** : Gestion d'instructions contradictoires
7. **RAG (Retrieval-Augmented Generation)** : Injection de données dans le contexte
8. **Contrôle de température** : Ajustement interactif des paramètres
9. **Long contexte** : Gestion d'un historique de conversation étendu
10. **Injection de prompt** : Tests de sécurité contre les entrées malveillantes
11. **MCP (Model Context Protocol)** : Orchestration d'appels d'outils externes dynamiques

### 2 Outils Bonus

- **Comparateur** : Comparaison côte à côte de deux contextes différents
- **Éditeur libre** : Construisez votre propre contexte message par message

### Interface utilisateur moderne

- **Navigation latérale avec icônes** : Interface shadcn/ui élégante avec icônes lucide-react
- **Questions suggérées** : Chaque étape propose une question pertinente pour tester le concept
- **Réinitialisation automatique** : Les champs se vident automatiquement lors du changement d'étape
- **Mini-conclusions** : Explication de ce qu'il faut observer après chaque résultat
- **Visualisation du contexte** : Voir exactement le JSON envoyé à l'API
- **Réponse en temps réel** : Affichage complet des réponses API
- **Page d'accueil** : Présentation complète avec QR code et lien GitHub
- **Clé API persistante** : Votre clé OpenAI est stockée localement dans votre navigateur

## 🚀 Démarrage

### Prérequis

- Node.js (v18 ou supérieur)
- Une clé API OpenAI ([Obtenez-en une ici](https://platform.openai.com/api-keys))

### Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/agentmaurice/llm-context-demo.git
cd llm-context-demo
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur et accédez à `http://localhost:5173/llm-context-demo/`

### Build pour production

```bash
npm run build
npm run preview
```

### Déploiement sur GitHub Pages

Le projet est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions. Chaque push sur la branche `main` déclenche un déploiement automatique.

## 🔑 Configuration de la clé API

1. Au premier lancement, vous serez invité à entrer votre clé API OpenAI
2. La clé est stockée dans le localStorage de votre navigateur (jamais envoyée à un serveur tiers, uniquement à OpenAI)
3. Vous pouvez reconfigurer votre clé API à tout moment via le lien dans la barre latérale ou la page de configuration

**Note de sécurité** : Votre clé API reste dans votre navigateur. Cette application effectue des appels directs à OpenAI depuis votre navigateur.

## 🛠️ Stack technologique

- **React 18** - Framework UI avec hooks
- **Vite** - Outil de build et serveur de développement
- **React Router** - Routage côté client
- **Tailwind CSS** - Styling utility-first
- **shadcn/ui** - Composants UI modernes (Button, Badge, Separator)
- **Lucide React** - Bibliothèque d'icônes
- **OpenAI API** - Modèles GPT-4 (gpt-4o et gpt-4-turbo)
- **GitHub Actions** - CI/CD pour déploiement automatique

## 📚 Parcours d'apprentissage

### Ordre recommandé pour les débutants

1. Commencez par **l'Étape 0** (Anatomie d'un appel API) pour comprendre la structure technique
2. Continuez avec **l'Étape 1** (Sans contexte) pour voir le comportement de base
3. Progressez à travers les **Étapes 2-3** pour comprendre les rôles système et l'historique
4. Essayez les **Étapes 4-5** pour apprendre les techniques de contrôle de sortie
5. Expérimentez avec **l'Étape 8** pour comprendre les effets de la température
6. Utilisez **l'Éditeur libre** pour créer vos propres expériences

### Pour les utilisateurs avancés

- **Étape 6** : Étudiez la gestion des priorités de contexte
- **Étape 7** : Comprenez l'implémentation du RAG
- **Étape 9** : Testez la gestion des limites de tokens
- **Étape 10** : Explorez les vulnérabilités de sécurité
- **Étape 11** : Découvrez le Model Context Protocol et l'orchestration d'outils
- **Comparateur** : Testez A/B différentes approches

## 🎓 Concepts clés expliqués

### Fenêtre de contexte (Context Window)
L'historique de conversation et les instructions envoyés avec chaque requête API. Tout ce qui est dans le contexte affecte la réponse du modèle.

### Prompts système
Messages spéciaux qui définissent le rôle, le comportement et les contraintes de l'assistant. Ils ont généralement une priorité plus élevée que les messages utilisateur.

### Few-shot Learning
Fournir des exemples dans le contexte pour enseigner au modèle un pattern ou format spécifique sans instructions explicites. Le modèle apprend par l'exemple.

### Température
Contrôle le caractère aléatoire des réponses :
- **0.0** : Réponses déterministes et concentrées
- **1.0** : Équilibre entre créativité et cohérence (par défaut)
- **2.0** : Créativité et aléatoire maximum

### RAG (Retrieval-Augmented Generation)
Intégration de données pertinentes dans le contexte pour ancrer les réponses dans des informations spécifiques plutôt que de s'appuyer uniquement sur les données d'entraînement. Les données sont injectées AVANT l'appel au LLM.

### MCP (Model Context Protocol)
Protocole standardisé permettant aux LLMs d'appeler dynamiquement des outils externes via un orchestrateur. Contrairement au RAG, le LLM DEMANDE les données PENDANT sa génération. Le MCP suit le protocole JSON-RPC 2.0 avec deux phases principales :
- **tools/list** : Découverte des outils disponibles
- **tools/call** : Exécution d'un outil spécifique

### Injection de prompt
Vulnérabilité de sécurité où un utilisateur malveillant tente de contourner les instructions système en injectant ses propres commandes. Protection via instructions système fermes et validation des entrées.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Suggérer de nouvelles étapes éducatives
- Améliorer la documentation
- Soumettre des pull requests
- Traduire l'interface dans d'autres langues

## 📝 Licence

Ce projet est open source et disponible à des fins éducatives.

## ⚠️ Avertissement

Cette application utilise l'API OpenAI qui entraîne des coûts basés sur l'utilisation. Veuillez surveiller votre utilisation de l'API et définir des limites appropriées dans votre compte OpenAI.

**Coûts estimés** : Chaque requête consomme des tokens (voir le champ `usage` dans les réponses). Les étapes avec long contexte (9, 11) consomment plus de tokens.

## 🔗 Ressources

- [Documentation API OpenAI](https://platform.openai.com/docs)
- [Guide Prompt Engineering](https://www.promptingguide.ai/)
- [Documentation React](https://react.dev/)
- [Documentation shadcn/ui](https://ui.shadcn.com/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Contact

Pour des questions ou des retours, veuillez ouvrir une issue sur GitHub.

---

**Fait avec ❤️ pour la communauté d'apprentissage de l'IA**

🌟 **N'oubliez pas de mettre une étoile au projet si vous l'avez trouvé utile !**
