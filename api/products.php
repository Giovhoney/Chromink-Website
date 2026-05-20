<?php
declare(strict_types=1);

header('Content-Type: application/json');
header('Cache-Control: no-store, max-age=0');

$dataFile = __DIR__ . '/products-data.json';
$adminToken = getenv('ADMIN_API_TOKEN') ?: 'chromink-admin';

$seedProducts = json_decode(<<<'JSON'
[
  {
    "id": "ci-tshirt-classic",
    "title": "Classic Custom T-Shirt Printing",
    "slug": "classic-custom-t-shirt-printing",
    "description": "Premium branded t-shirts for events, teams, campaigns, churches, schools, and business uniforms. Choose your size, finish, and quantity, then checkout by WhatsApp for final artwork confirmation.",
    "category": "T-Shirt Printing",
    "images": ["/images/tshirt-sample.png", "/images/whatsapp/1.jpeg", "/images/whatsapp/2.jpeg"],
    "basePrice": 80,
    "variants": [
      { "name": "Small", "price": 80 },
      { "name": "Medium", "price": 85 },
      { "name": "Large", "price": 90 },
      { "name": "XL", "price": 100 }
    ],
    "finishes": ["White cotton", "Black cotton", "Full colour heat transfer", "Vinyl print"],
    "available": true,
    "visible": true,
    "featured": true,
    "badge": "Popular",
    "rating": 4.9,
    "reviews": 42,
    "turnaround": "2-4 working days"
  },
  {
    "id": "ci-labels-product",
    "title": "Product Stickers & Labels",
    "slug": "product-stickers-and-labels",
    "description": "Sharp, durable labels for cosmetics, food packaging, bottles, jars, bags, and product launches. Available in gloss, matte, transparent, and vinyl finishes.",
    "category": "Stickers & Labels",
    "images": ["/images/sticker-sample.png", "/images/whatsapp/3.jpeg", "/images/whatsapp/4.jpeg"],
    "basePrice": 120,
    "variants": [
      { "name": "50 pieces", "price": 120 },
      { "name": "100 pieces", "price": 210 },
      { "name": "250 pieces", "price": 450 },
      { "name": "500 pieces", "price": 780 }
    ],
    "finishes": ["Gloss", "Matte", "Transparent", "Water-resistant vinyl"],
    "available": true,
    "visible": true,
    "featured": true,
    "badge": "Bulk Deal",
    "rating": 4.8,
    "reviews": 36,
    "turnaround": "1-3 working days"
  },
  {
    "id": "ci-poster-a2",
    "title": "Event Poster Printing",
    "slug": "event-poster-printing",
    "description": "Vibrant posters for indoor promotions, church programmes, events, retail announcements, and campus campaigns.",
    "category": "Posters",
    "images": ["/images/poster-sample.png", "/images/whatsapp/5.jpeg", "/images/whatsapp/7.jpeg"],
    "basePrice": 45,
    "variants": [
      { "name": "A3 poster", "price": 45 },
      { "name": "A2 poster", "price": 75 },
      { "name": "A1 poster", "price": 120 },
      { "name": "A0 poster", "price": 190 }
    ],
    "finishes": ["Matte paper", "Gloss paper", "Laminated", "Mounted board"],
    "available": true,
    "visible": true,
    "featured": false,
    "badge": "Fast",
    "rating": 4.7,
    "reviews": 21,
    "turnaround": "Same day to 2 days"
  },
  {
    "id": "ci-banner-vinyl",
    "title": "Outdoor Vinyl Banner",
    "slug": "outdoor-vinyl-banner",
    "description": "Weather-ready banners for shops, churches, funerals, launches, and outdoor advertising with clean finishing and clear colour reproduction.",
    "category": "Banners",
    "images": ["/images/banner-sample.png", "/images/service-banner.png", "/images/whatsapp/8.jpeg"],
    "basePrice": 150,
    "variants": [
      { "name": "3ft x 2ft", "price": 150 },
      { "name": "4ft x 3ft", "price": 240 },
      { "name": "6ft x 3ft", "price": 360 },
      { "name": "8ft x 4ft", "price": 620 }
    ],
    "finishes": ["Eyelets", "Pole pockets", "Matte vinyl", "Gloss vinyl"],
    "available": true,
    "visible": true,
    "featured": true,
    "badge": "Outdoor",
    "rating": 4.9,
    "reviews": 58,
    "turnaround": "1-3 working days"
  },
  {
    "id": "ci-business-cards",
    "title": "Premium Business Cards",
    "slug": "premium-business-cards",
    "description": "Professional cards with crisp print, rich colour, and optional lamination for founders, teams, sales reps, creatives, and service businesses.",
    "category": "Business Cards",
    "images": ["/images/flyer-sample.png", "/images/document-printing-sample.png", "/images/whatsapp/9.jpeg"],
    "basePrice": 180,
    "variants": [
      { "name": "100 cards", "price": 180 },
      { "name": "250 cards", "price": 360 },
      { "name": "500 cards", "price": 620 },
      { "name": "1000 cards", "price": 1050 }
    ],
    "finishes": ["Matte laminate", "Gloss laminate", "Rounded corners", "Spot colour"],
    "available": true,
    "visible": true,
    "featured": false,
    "badge": "Premium",
    "rating": 4.8,
    "reviews": 33,
    "turnaround": "2-4 working days"
  },
  {
    "id": "ci-packaging-label-kit",
    "title": "Starter Packaging Kit",
    "slug": "starter-packaging-kit",
    "description": "A tidy starter bundle for small businesses that need labels, thank-you cards, and branded packaging accents for product delivery.",
    "category": "Packaging",
    "images": ["/images/custom-orders-sample.png", "/images/sticker-sample.png", "/images/whatsapp/10.jpeg"],
    "basePrice": 350,
    "variants": [
      { "name": "Starter", "price": 350 },
      { "name": "Growth", "price": 620 },
      { "name": "Launch bundle", "price": 980 }
    ],
    "finishes": ["Kraft look", "White gloss", "Transparent labels", "Mixed finishes"],
    "available": true,
    "visible": true,
    "featured": true,
    "badge": "Bundle",
    "rating": 4.8,
    "reviews": 18,
    "turnaround": "3-5 working days"
  },
  {
    "id": "ci-engraved-plaque",
    "title": "Engraved Plaques & Tags",
    "slug": "engraved-plaques-and-tags",
    "description": "Clean engraved plates, tags, awards, and keepsakes for offices, events, gifts, and product branding.",
    "category": "Engraving",
    "images": ["/images/present2.jpg", "/images/present3.jpg", "/images/whatsapp/11.jpeg"],
    "basePrice": 90,
    "variants": [
      { "name": "Small tag", "price": 90 },
      { "name": "Desk plate", "price": 160 },
      { "name": "Award plaque", "price": 280 }
    ],
    "finishes": ["Gold plate", "Silver plate", "Wood look", "Black acrylic"],
    "available": true,
    "visible": true,
    "featured": false,
    "badge": "Custom",
    "rating": 4.7,
    "reviews": 14,
    "turnaround": "3-6 working days"
  },
  {
    "id": "ci-wall-canvas",
    "title": "Personalized Wall Canvas",
    "slug": "personalized-wall-canvas",
    "description": "Gallery-style canvas wall prints for homes, offices, birthdays, memorials, studios, and brand spaces.",
    "category": "Wall Canvases",
    "images": ["/images/bigframe.jpeg", "/images/present7.jpeg", "/images/present8.jpeg"],
    "basePrice": 220,
    "variants": [
      { "name": "12 x 16 inches", "price": 220 },
      { "name": "16 x 20 inches", "price": 330 },
      { "name": "24 x 36 inches", "price": 620 },
      { "name": "Custom size", "price": 850 }
    ],
    "finishes": ["Canvas wrap", "Framed", "Matte surface", "Gloss surface"],
    "available": true,
    "visible": true,
    "featured": true,
    "badge": "Gift Pick",
    "rating": 4.9,
    "reviews": 27,
    "turnaround": "2-5 working days"
  },
  {
    "id": "ci-promo-mugs",
    "title": "Promotional Mug Printing",
    "slug": "promotional-mug-printing",
    "description": "Custom mugs for brand promotions, birthdays, corporate gifts, church groups, schools, and campaign giveaways.",
    "category": "Promotional Items",
    "images": ["/images/present1.jpg", "/images/present4.jpg", "/images/present5.jpg"],
    "basePrice": 70,
    "variants": [
      { "name": "1 mug", "price": 70 },
      { "name": "12 mugs", "price": 720 },
      { "name": "24 mugs", "price": 1320 },
      { "name": "50 mugs", "price": 2600 }
    ],
    "finishes": ["White ceramic", "Magic mug", "Full wrap", "Logo print"],
    "available": true,
    "visible": true,
    "featured": false,
    "badge": "Gift",
    "rating": 4.8,
    "reviews": 31,
    "turnaround": "2-4 working days"
  }
]
JSON, true);

function respond(int $status, array $body): void {
  http_response_code($status);
  echo json_encode($body);
  exit;
}

function slugify(string $value): string {
  $slug = strtolower(trim($value));
  $slug = preg_replace('/[^a-z0-9]+/', '-', $slug);
  return trim((string) $slug, '-');
}

function uniqueSlug(array $products, string $slug, string $id): string {
  $base = slugify($slug) ?: 'product-' . time();
  $candidate = $base;
  $count = 2;

  while (true) {
    $exists = false;
    foreach ($products as $product) {
      if (($product['slug'] ?? '') === $candidate && ($product['id'] ?? '') !== $id) {
        $exists = true;
        break;
      }
    }

    if (!$exists) {
      return $candidate;
    }

    $candidate = $base . '-' . $count;
    $count++;
  }
}

function normalizeProduct(array $product, array $existingProducts, ?array $existingProduct = null): array {
  $variants = [];
  foreach (($product['variants'] ?? []) as $variant) {
    $name = trim((string) ($variant['name'] ?? ''));
    $price = (float) ($variant['price'] ?? 0);
    if ($name !== '' && is_finite($price)) {
      $variants[] = ['name' => $name, 'price' => $price];
    }
  }

  $finishes = array_values(array_filter(array_map('trim', array_map('strval', $product['finishes'] ?? []))));
  $images = array_values(array_filter(array_map('trim', array_map('strval', $product['images'] ?? []))));
  $id = (string) ($product['id'] ?? $existingProduct['id'] ?? uniqid('ci-', true));
  $firstPrice = $variants[0]['price'] ?? (float) ($product['basePrice'] ?? 0);

  return [
    'id' => $id,
    'title' => trim((string) ($product['title'] ?? '')),
    'slug' => uniqueSlug($existingProducts, (string) ($product['slug'] ?? $product['title'] ?? ''), $id),
    'description' => trim((string) ($product['description'] ?? '')),
    'category' => trim((string) ($product['category'] ?? 'Uncategorized')) ?: 'Uncategorized',
    'images' => count($images) ? $images : ['/images/service-banner.png'],
    'basePrice' => $firstPrice,
    'variants' => count($variants) ? $variants : [['name' => 'Standard', 'price' => $firstPrice]],
    'finishes' => count($finishes) ? $finishes : ['Full colour'],
    'available' => (bool) ($product['available'] ?? false),
    'visible' => (bool) ($product['visible'] ?? false),
    'featured' => (bool) ($product['featured'] ?? false),
    'badge' => trim((string) ($product['badge'] ?? '')),
    'rating' => is_numeric($product['rating'] ?? null) ? (float) $product['rating'] : 5,
    'reviews' => is_numeric($product['reviews'] ?? null) ? (int) $product['reviews'] : 0,
    'turnaround' => trim((string) ($product['turnaround'] ?? '2-4 working days')) ?: '2-4 working days',
    'createdAt' => $existingProduct['createdAt'] ?? $product['createdAt'] ?? gmdate('c'),
    'updatedAt' => gmdate('c'),
  ];
}

function readProducts(string $dataFile, array $seedProducts): array {
  if (!file_exists($dataFile)) {
    $seeded = [];
    foreach ($seedProducts as $product) {
      $seeded[] = normalizeProduct($product, $seedProducts, $product);
    }
    writeProducts($dataFile, $seeded);
    return $seeded;
  }

  $content = file_get_contents($dataFile);
  $products = json_decode($content ?: '[]', true);
  return is_array($products) ? $products : [];
}

function writeProducts(string $dataFile, array $products): void {
  if (file_put_contents($dataFile, json_encode($products, JSON_PRETTY_PRINT), LOCK_EX) === false) {
    respond(500, ['error' => 'Unable to write products data on the server.']);
  }
}

function requireAdmin(string $adminToken): void {
  $headers = function_exists('getallheaders') ? getallheaders() : [];
  if (!$headers) {
    foreach ($_SERVER as $name => $value) {
      if (strpos($name, 'HTTP_') === 0) {
        $headerName = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))));
        $headers[$headerName] = $value;
      }
    }
  }
  $token = $headers['x-admin-token'] ?? $headers['X-Admin-Token'] ?? '';

  if (!hash_equals($adminToken, $token)) {
    respond(401, ['error' => 'Invalid admin token.']);
  }
}

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'POST' && isset($_GET['_method'])) {
  $method = strtoupper((string) $_GET['_method']);
}
$id = isset($_GET['id']) ? (string) $_GET['id'] : null;

try {
  if ($method === 'GET') {
    respond(200, ['products' => readProducts($dataFile, $seedProducts)]);
  }

  requireAdmin($adminToken);
  $products = readProducts($dataFile, $seedProducts);
  $body = json_decode(file_get_contents('php://input') ?: '{}', true);
  if (!is_array($body)) {
    respond(400, ['error' => 'Invalid JSON body.']);
  }

  if ($method === 'POST') {
    $product = normalizeProduct($body, $products);
    array_unshift($products, $product);
    writeProducts($dataFile, $products);
    respond(201, ['product' => $product]);
  }

  if ($method === 'PUT' && $id) {
    $updated = false;
    foreach ($products as $index => $product) {
      if (($product['id'] ?? '') === $id) {
        $nextProduct = normalizeProduct(array_merge($body, ['id' => $id]), $products, $product);
        $products[$index] = $nextProduct;
        $updated = true;
        break;
      }
    }

    if (!$updated) {
      respond(404, ['error' => 'Product not found.']);
    }

    writeProducts($dataFile, $products);
    respond(200, ['product' => $nextProduct]);
  }

  if ($method === 'DELETE' && $id) {
    $nextProducts = array_values(array_filter($products, fn($product) => ($product['id'] ?? '') !== $id));
    if (count($nextProducts) === count($products)) {
      respond(404, ['error' => 'Product not found.']);
    }

    writeProducts($dataFile, $nextProducts);
    respond(200, ['ok' => true]);
  }

  respond(405, ['error' => 'Method not allowed.']);
} catch (Throwable $error) {
  respond(500, ['error' => $error->getMessage()]);
}
